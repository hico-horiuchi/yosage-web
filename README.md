## yosage-web

![screen.gif](https://raw.githubusercontent.com/hico-horiuchi/yosage-web/master/screen.gif)

#### Requirements

  - [Golang](https://golang.org/) : 1.5.3
  - [Mithril.js](https://lhorie.github.io/mithril/) : 0.2.2-rc.1
  - [Materialize.css](http://materializecss.com/) : 0.97.5
  - [Font Awesome](http://fontawesome.io/) : 4.5.0
  - [Animate.css](http://daneden.github.io/animate.css/) : 3.5.1

#### Usage

    $ git clone git://github.com/hico-horiuchi/yosage-web.git
    $ cd yosage-web
    $ make gom link
    $ make build
    $ bin/yosage-web

#### API

    $ curl -XPOST -F inputfile=@input.gif localhost:8000/api/lgtm | jq '.data' | tr -d '"' | base64 -d > output.gif

#### License

yosage-web is released under the [MIT license](https://raw.githubusercontent.com/hico-horiuchi/yosage-web/master/LICENSE).
