.PHONY:
start:
	. ${NVM_DIR}/nvm.sh && \
		nvm use 14 && \
		node --version && \
		NODE_OPTIONS=--openssl-legacy-provider yarn start
