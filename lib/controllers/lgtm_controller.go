package controllers

import (
	"net/http"

	"github.com/hico-horiuchi/yosage-web/lib/models"
	"github.com/zenazn/goji/web"
)

type LgtmController struct {
	controller
}

func (lgtm LgtmController) Create(c web.C, w http.ResponseWriter, r *http.Request) {
	file, header, err := r.FormFile("inputfile")
	if err != nil {
		http.Error(w, http.StatusText(http.StatusBadRequest), http.StatusBadRequest)
		return
	}
	defer file.Close()

	result, err := models.NewLgtm(&file, header)
	if err != nil {
		http.Error(w, http.StatusText(http.StatusInternalServerError), http.StatusInternalServerError)
	}
	lgtm.API(w, result)
}
