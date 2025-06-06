.PHONY:
start:
	. ${NVM_DIR}/nvm.sh && \
		nvm use 14 && \
		node --version && \
		yarn start
