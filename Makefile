.PHONY:
start:
	. ${NVM_DIR}/nvm.sh && \
		nvm use 18 && \
		node --version && \
		NODE_OPTIONS=--openssl-legacy-provider yarn start
