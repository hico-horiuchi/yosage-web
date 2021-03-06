package controllers

import (
	"net/http"

	"github.com/hico-horiuchi/yosage-web/backend/models"
	"github.com/zenazn/goji/web"
)

type LgtmController struct {
	controller
}

func (lgtm LgtmController) CreateAPI(c web.C, w http.ResponseWriter, r *http.Request) {
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
	lgtm.JSON(w, result)
}
