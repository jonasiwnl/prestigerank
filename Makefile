.PHONY: start deploy-dev deploy-prod

start:
	deno task start --env-file=.env

deploy-dev:
	deployctl deploy --save-config

deploy-prod:
	deployctl deploy --save-config --prod
