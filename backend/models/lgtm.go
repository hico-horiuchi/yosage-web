package models

import (
	"bufio"
	"bytes"
	"encoding/base64"
	"image/gif"
	"mime/multipart"
	"regexp"

	"github.com/hico-horiuchi/yosage/yosage"
)

type Lgtm struct {
	Filename string `json:"filename"`
	Data     string `json:"data"`
}

func NewLgtm(file *multipart.File, header *multipart.FileHeader) (*Lgtm, error) {
	input, err := gif.DecodeAll(*file)
	if err != nil {
		return nil, err
	}

	output, err := yosage.Generate(input)
	if err != nil {
		return nil, err
	}

	var b bytes.Buffer
	writer := bufio.NewWriter(&b)

	err = gif.EncodeAll(writer, output)
	if err != nil {
		return nil, err
	}
	writer.Flush()

	re := regexp.MustCompile(`\.(gif|GIF)$`)
	return &Lgtm{
		Filename: re.ReplaceAllString(header.Filename, "") + "_lgtm.gif",
		Data:     base64.StdEncoding.EncodeToString(b.Bytes()),
	}, nil
}
