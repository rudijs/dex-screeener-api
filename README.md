# dex-screeener-api
Dexscreener.com API scripts

### Test

- `npm test`

### Initial setup notes
```bash
mkdir dex-screeener-api
cd dex-screeener-api
npm init -y
npm i -S typescript
npx tsc --init

curl -L \\n  'https://api.dexscreener.com/token-boosts/latest/v1' -o token-boosts.json
curl -L \\n  'https://api.dexscreener.com/token-profiles/latest/v1'
```
