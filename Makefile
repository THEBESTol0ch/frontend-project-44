install:
	npm ci

publish:
	npm publish --dry-run

publish2:
	sudo npm link

lint:
	npx eslint .
