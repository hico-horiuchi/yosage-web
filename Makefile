GO_BUILDOPT := -ldflags '-s -w'

gom:
	go get github.com/mattn/gom
	gom install

run:
	gom run main.go ${ARGS}

fmt:
	gom exec goimports -w *.go backend/*/*.go

bindata:
	gom exec go-bindata-assetfs ./lgtm.png ./frontend/... ./assets/... ./backend/views/...

debugdata:
	gom exec go-bindata-assetfs -debug=true ./lgtm.png ./frontend/... ./assets/... ./backend/views/...

build: fmt bindata
	gom build $(GO_BUILDOPT) -o bin/yosage-web *.go

clean:
	rm -f bin/yosage-web

link:
	mkdir -p $(GOPATH)/src/github.com/hico-horiuchi
	ln -s $(CURDIR) $(GOPATH)/src/github.com/hico-horiuchi/yosage-web

unlink:
	rm $(GOPATH)/src/github.com/hico-horiuchi/yosage-web
	rmdir $(GOPATH)/src/github.com/hico-horiuchi
