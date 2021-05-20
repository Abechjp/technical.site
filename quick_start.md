##
```
npm update
```

###
```
rd ./.cache -Recurse
```

```
rd ./public/* -Recurse
```

```
rd ./node_modules -Recurse
```

```
rd package-lock.json
```

```
rd ./.cache -Recurse ; rd ./public/* -Recurse ; rd ./node_modules -Recurse ; rd package-lock.json ; npm install ; gatsby clean
rd ./.cache -Recurse ; rd ./public/* -Recurse ; rd ./node_modules -Recurse ; rd package-lock.json ; yarn install ; gatsby clean
```


```
gatsby clean
```



```
gatsby build --prefix-paths
```


```
cp src/components/404.html public/
```

```
rd ./docs/* -Recurse
```


```
mv public/* docs/
```


```
npm cache clean --force
```

```
rd package-lock.json
```

## test develop
```
cp src/components/404.html public/
```

## test build
```
rd ./.cache -Recurse ; gatsby clean ; gatsby build --prefix-paths ; cp src/components/404.html public/; rd ./docs/* -Recurse ; mv public/* docs/
```

## push
```
rd ./.cache -Recurse ; gatsby clean ; gatsby build --prefix-paths ; cp src/components/404.html public/; rd ./docs/* -Recurse ; mv public/* docs/
```

## github連携
```
git add *; git commit -m 'npm依存関係の変更'; git push
```
