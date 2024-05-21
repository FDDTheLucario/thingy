FROM alpine:3.19.1
RUN apk install git \
&& git clone https://github.com/asdf-vm/asdf.git ~/.asdf --branch v0.14.0
&& echo '. "$HOME/.asdf/asdf.sh"' > $HOME/.bashrc && source ~/.bashrc
RUN asdf plugin add nodejs https://github.com/asdf-vm/asdf-nodejs.git && asdf install
