package main

import (
	"log"
	"net/http"

	assetfs "github.com/elazarl/go-bindata-assetfs"
	"github.com/hico-horiuchi/yosage-web/lib/controllers"
	"github.com/hico-horiuchi/yosage/yosage"
	"github.com/zenazn/goji"
)

func main() {
	var err error

	yosage.LGTM, err = Asset("lgtm.png")
	if err != nil {
		log.Fatalln(err)
	}

	controllers.Asset = Asset
	top := controllers.TopController{}
	lgtm := controllers.LgtmController{}

	goji.Get("/assets/*", http.FileServer(&assetfs.AssetFS{Asset: Asset, AssetDir: AssetDir, AssetInfo: AssetInfo, Prefix: "/"}))
	goji.Get("/app/*", http.FileServer(&assetfs.AssetFS{Asset: Asset, AssetDir: AssetDir, AssetInfo: AssetInfo, Prefix: "/"}))
	goji.Post("/api/lgtm", lgtm.CreateAPI)
	goji.Get("/", top.Index)

	goji.Serve()
}
