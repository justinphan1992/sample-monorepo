# sample-monorepo

Simple monorepo for react app

## Usage

1./ Install global lerna
```
npm install -g lerna
```

2./ Install dependencies
```
yarn
```

3./ Start app
```
cd packages/app && yarn start
```


## Usefull Command

- Add dependecy to add local package
```
lerna add [dependency] --scope=[package]
```

- Add dependecy to add local mutiple package
```
lerna add [dependency] --scope=[packageA] --scope=[packageB]
```