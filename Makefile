.PHONY: start deploy count

start:
	deno task start

deploy:
	deno deploy

count:
	cloc --exclude-dir=node_modules .
