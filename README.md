# π€ ν νλ‘μ νΈ

- κ³Όμ  κΈ°ν: 
  - κ³Όμ  μν κΈ°κ°: 06μ 09μΌ(λͺ©) ~ 07μ 22μΌ(κΈ)
  - μ½λ λ¦¬λ·° κΈ°κ°: 07μ 22μΌ(κΈ) ~ 07μ 29μΌ(κΈ)
- λ΄μ©: 
  - API λΆμ ν μ΄λ€ νλ‘μ νΈλ‘ μ§ν/μμ±ν  κ²μΈμ§ ν λ¨μλ‘ κ²°μ νμΈμ.

## API μ¬μ©λ²

λͺ¨λ  API μμ²­(Request) `headers`μ λ€μ μ λ³΄κ° κΌ­ ν¬ν¨λμ΄μΌ ν©λλ€.<br>
`username`μ λ€λ₯Έ μ¬λκ³Ό κ²ΉμΉμ§ μλλ‘ μ£ΌμνμΈμ!<br>
λ³ΈλͺμΌλ‘ λ§λ€λ©΄ λμ€μ λ¬Έμ κ° λ°μνμ λ μ°ΎκΈ°κ° μ¬μμ.(E.g. `ParkYoungWoong`)

```json
{
  "content-type": "application/json",
  "apikey": "FcKdtJs202204",
  "username": "<YOUR_NAME>"
}
```

<hr />

## μΈμ¦

'μΈμ¦' κ΄λ ¨ APIλ λͺ¨λ μΌλ° μ¬μ©μ μ μ©μλλ€.

### νμκ°μ

μ¬μ©μκ° `username`μ μ’μλμ΄ νμκ°μν©λλ€.

- μ¬μ©μ λΉλ°λ²νΈλ μνΈνν΄ μ μ₯ν©λλ€.(κ΄λ¦¬μλ νμΈν  μ μμ΅λλ€!)
- νλ‘ν μ΄λ―Έμ§λ 1MB μ΄νμ¬μΌ ν©λλ€.

```curl
curl https://asia-northeast3-heropy-api.cloudfunctions.net/api/auth/signup
  \ -X 'POST'
```

```plaintext
@param {String} email - μ¬μ©μ μμ΄λ (νμ!)
@param {String} password - μ¬μ©μ λΉλ°λ²νΈ, 8μ μ΄μ (νμ!)
@param {String} displayName - μ¬μ©μ μ΄λ¦, 20μ μ΄ν (νμ!)
@param {String} profileImgBase64 - μ¬μ©μ νλ‘ν μ΄λ―Έμ§(base64)
@return {Object} object
@return {Object} object.user - νμκ°μν μ¬μ©μ μ λ³΄
@return {String} object.accessToken - μ¬μ©μ μ κ·Ό ν ν°
```

μμ²­ λ°μ΄ν° μμ:

```json
{
  "email": "thesecon@gmail.com",
  "password": "********",
  "displayName": "ParkYoungWoong",
  "profileImgBase64": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAf...(μλ΅)"
}
```

μλ΅ λ°μ΄ν° μμ:

```json
{
  "user": {
    "email": "thesecon@gmail.com",
    "displayName": "ParkYoungWoong",
    "profileImg": "https://storage.googleapis.com/heropy-api/vjbtIrh5dGv163442.png"
  },
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlM3WDhpQ...(μλ΅)"
}
```

### λ‘κ·ΈμΈ

- λ°κΈλ `accessToken`μ 24μκ° ν λ§λ£λ©λλ€.(λ§λ£ ν λ€μ λ‘κ·ΈμΈ νμ)

```curl
curl https://asia-northeast3-heropy-api.cloudfunctions.net/api/auth/login
  \ -X 'POST'
```

```plaintext
@param {String} email - μ¬μ©μ μμ΄λ (νμ!)
@param {String} password - μ¬μ©μ λΉλ°λ²νΈ (νμ!) 
@return {Object} userInfo
@return {Object} userInfo.user - λ‘κ·ΈμΈν μ¬μ©μ μ λ³΄
@return {String} userInfo.accessToken - μ¬μ©μ μ κ·Ό ν ν°
```

μμ²­ λ°μ΄ν° μμ:

```json
{
  "email": "thesecon@gmail.com",
  "password": "********"
}
```

μλ΅ λ°μ΄ν° μμ:

```json
{
  "user": {
    "email": "thesecon@gmail.com",
    "displayName": "ParkYoungWoong",
    "profileImg": "https://storage.googleapis.com/heropy-api/vAKjlJ-Gx5v163442.png"
  },
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjlQS3I...(μλ΅)"
}
```

### μΈμ¦ νμΈ

```curl
curl https://asia-northeast3-heropy-api.cloudfunctions.net/api/auth/me 
  \ -X 'POST'
  \ -H 'Authorization: Bearer <accessToken>'
```

```plaintext 
@return {Object} - λ‘κ·ΈμΈν μ¬μ©μ μ λ³΄
```

μμ²­ λ°μ΄ν° μμ:

```js
undefined
```

μλ΅ λ°μ΄ν° μμ:

```json
{
  "email": "thesecon@gmail.com",
  "displayName": "ParkYoungWoong",
  "profileImg": "https://storage.googleapis.com/heropy-api/vAKjlJ-Gx5v163442.png"
}
```

### λ‘κ·Έμμ

```curl
curl https://asia-northeast3-heropy-api.cloudfunctions.net/api/auth/logout 
  \ -X 'POST'
  \ -H 'Authorization: Bearer <accessToken>'
```

```plaintext 
@return {Boolean} - λ‘κ·Έμμ μ¬λΆ
```

μμ²­ λ°μ΄ν° μμ:

```js
undefined
```

μλ΅ λ°μ΄ν° μμ:

```json
true
```

### μ¬μ©μ μ λ³΄ μμ 

```curl
curl https://asia-northeast3-heropy-api.cloudfunctions.net/api/auth/user 
  \ -X 'PUT'
  \ -H 'Authorization: Bearer <accessToken>'
```

```plaintext
@param {String} displayName - μλ‘μ΄ μ¬μ©μ μ΄λ¦
@param {String} profileImgBase64 - μλ‘μ΄ μ¬μ©μ νλ‘ν μ΄λ―Έμ§(base64)
@param {String} oldPassword - κΈ°μ‘΄ μ¬μ©μ λΉλ°λ²νΈ
@param {String} newPassword - μλ‘μ΄ μ¬μ©μ λΉλ°λ²νΈ
@return {Object} - μμ λ μ¬μ©μ μ λ³΄
```

μμ²­ λ°μ΄ν° μμ:

```json
{
  "oldPassword": "********",
  "newPassword": "**********"
}
```

μλ΅ λ°μ΄ν° μμ:

```json
{
  "email": "thesecon@gmail.com",
  "displayName": "ParkYoungWoong",
  "profileImg": "https://storage.googleapis.com/heropy-api/vAKjlJ-Gx5v163442.png"
}
```

<hr />

## κ³μ’

'κ³μ’' κ΄λ ¨ APIλ λͺ¨λ μΌλ° μ¬μ©μ μ μ©μλλ€.

### μ ν κ°λ₯ν μν λͺ©λ‘ μ‘°ν

- μν λΉ νλμ κ³μ’λ§ νμ©λ©λλ€.
- μ¬μ©μκ° κ³μ’λ₯Ό μΆκ°νλ©΄, ν΄λΉ μν μ λ³΄ `disabled` μμ±μ΄ `true`λ‘ λ³κ²½λ©λλ€.
- μν μ λ³΄ `digits` μμ±μ μ«μλ₯Ό λͺ¨λ λνλ©΄ κ° μνμ μ ν¨ν κ³μ’λ²νΈ κΈΈμ΄κ° λ©λλ€.

```curl
curl https://asia-northeast3-heropy-api.cloudfunctions.net/api/account/banks
  \ -X 'GET'
  \ -H 'Authorization: Bearer <accessToken>'
```

```plaintext
@return {Object[]} - μ ν κ°λ₯ν μν λͺ©λ‘
```

μμ²­ λ°μ΄ν° μμ:

```js
undefined
```

μλ΅ λ°μ΄ν° μμ:

```json
[
  {
    "name": "KBκ΅­λ―Όμν",
    "code": "004",
    "digits": [3, 2, 4, 3],
    "disabled": false
  },
  {
    "name": "μ νμν",
    "code": "088",
    "digits": [3, 3, 6],
    "disabled": true
  },
  {
    "name": "μ°λ¦¬μν",
    "code": "020",
    "digits": [4, 3, 6],
    "disabled": true
  },
  {
    "name": "νλμν",
    "code": "081",
    "digits": [3, 6, 5],
    "disabled": false
  },
  {
    "name": "μΌμ΄λ±ν¬",
    "code": "089",
    "digits": [3, 3, 6],
    "disabled": false
  },
  {
    "name": "μΉ΄μΉ΄μ€λ±ν¬",
    "code": "090",
    "digits": [4, 2, 7],
    "disabled": false
  },
  {
    "name": "NHλνμν",
    "code": "011",
    "digits": [3, 4, 4, 2],
    "disabled": false
  }
]
```

### κ³μ’ λͺ©λ‘ λ° μμ‘ μ‘°ν

- κ³μ’λ²νΈλ μΌλΆλ§ λΈμΆλ©λλ€. E.g. `"356-XXXX-XXXX-XX"`
- μμ‘μ λ¨μλ 'μν(οΏ¦)'μλλ€.

```curl
curl https://asia-northeast3-heropy-api.cloudfunctions.net/api/account 
  \ -X 'GET'
  \ -H 'Authorization: Bearer <accessToken>'
```

```plaintext
@return {Object} object
@return {Object} object.totalBalance - κ³μ’ μμ‘ μ΄ν©
@return {Object[]} object.accounts - κ³μ’ μ λ³΄ λ°°μ΄
```

μμ²­ λ°μ΄ν° μμ:

```js
undefined
```

μλ΅ λ°μ΄ν° μμ:

```json
{
  "totalBalance": 5999900,
  "accounts": [
    {
      "id": "jQMfKla8vOIFELA3mAXv",
      "bankName": "NHλνμν",
      "bankCode": "011",
      "accountNumber": "356-XXXX-XXXX-XX",
      "balance": 2999900
    },
    {
      "id": "wiPgsXvMAmcLw8AuRHIi",
      "bankName": "KBκ΅­λ―Όμν",
      "bankCode": "004",
      "accountNumber": "123-XX-XXXX-XXX",
      "balance": 3000000
    }
  ]
}
```

### κ³μ’ μ°κ²°

- μ°κ²°λ κ³μ’ μμ‘μλ μλμΌλ‘ κΈ°λ³Έ '3λ°±λ§μ'μ΄ μΆκ°λ©λλ€.
- μμ²­νλ κ³μ’λ²νΈμλ `-` κ΅¬λΆμ΄ μμ΄μΌ ν©λλ€.
- μμ²­νλ μ νλ²νΈμλ `-` κ΅¬λΆμ΄ μμ΄μΌ ν©λλ€.

```curl
curl https://asia-northeast3-heropy-api.cloudfunctions.net/api/account 
  \ -X 'POST'
  \ -H 'Authorization: Bearer <accessToken>'
```

```plaintext
@param {String} bankCode - μν μ½λ (νμ!)
@param {String} accountNumber - κ³μ’λ²νΈ (νμ!)
@param {String} phoneNumber - μ νλ²νΈ (νμ!)
@param {Boolean} signature - μλͺ (νμ!)
@return {Object} - μ°κ²°ν κ³μ’ μ λ³΄
```

μμ²­ λ°μ΄ν° μμ:

```json
{
  "bankCode": "088",
  "accountNumber": "123456789012",
  "phoneNumber": "01012345678",
  "signature": true
}
```

μλ΅ λ°μ΄ν° μμ:

```json
{
  "id": "1qRFC6Ey5VkSu6nyj5Ba",
  "bankName": "μ νμν",
  "bankCode": "088",
  "accountNumber": "123-XXX-XXXXXX",
  "balance": 3000000
}
```

### κ³μ’ ν΄μ§

- ν΄μ§ν κ³μ’λ λ€μ μ°κ²°ν΄λ μμ‘μ΄ λ°μλμ§ μμ΅λλ€.(κΈ°λ³Έ κΈμ‘μΌλ‘ μΆκ°λ©λλ€)

```curl
curl https://asia-northeast3-heropy-api.cloudfunctions.net/api/account 
  \ -X 'DELETE'
  \ -H 'Authorization: Bearer <accessToken>'
```

```plaintext
@param {String} accountId - κ³μ’ ID (νμ!)
@param {Boolean} signature - μλͺ (νμ!)
@return {Boolean} - κ³μ’ ν΄μ§ μ¬λΆ
```

μμ²­ λ°μ΄ν° μμ:

```json
{
  "accountId": "jQMfKla8vOIFELA3mAXv",
  "signature": true
}
```

μλ΅ λ°μ΄ν° μμ:

```js
true
```

<hr />

## μ ν

'μ ν' κ΄λ ¨ APIλ κ΄λ¦¬μ μ μ©κ³Ό μΌλ° μ¬μ©μ μ μ©μΌλ‘ κ΅¬λΆλ©λλ€.<br>
κ³΅μ© APIλ μμΌλ μ£ΌμνμΈμ!

### λͺ¨λ  μ ν μ‘°ν

- κ΄λ¦¬μ μ μ© APIμλλ€.
- μμΈ μ λ³΄κ° μλ κΈ°λ³Έ μ λ³΄μ μ ν μ€λͺμ 100μκΉμ§λ§ ν¬ν¨λ©λλ€.
- μμΈ μ λ³΄κ° μλ κΈ°λ³Έ μ λ³΄μ μ ν μμΈ μ¬μ§μ ν¬ν¨λμ§ μμ΅λλ€.

```curl
curl https://asia-northeast3-heropy-api.cloudfunctions.net/api/products 
  \ -X 'GET'
  \ -H 'masterKey: true'
```

```plaintext
@return {Object[]} - κ΄λ¦¬νλ λͺ¨λ  μ νμ λ°°μ΄
```

μμ²­ λ°μ΄ν° μμ:

```js
undefined
```

μλ΅ λ°μ΄ν° μμ:

```json
[
  {
    "id": "cFmeC7aY5KjZbBAdJE9y",
    "title": "μΌμ±μ μ μ€λ§νΈλͺ¨λν° M7 S43AM700",
    "price": 639000,
    "description": "107.9cm(43μΈμΉ) / μμ΄λ(16:9) / νλ©΄ / VA / 3840 x 2160(4K UHD) / ν½μνΌμΉ: 0.2451mm / 8ms(GTG) / 300cd / 5,00",
    "tags": [
      "κ°μ ",
      "λͺ¨λν°",
      "μ»΄ν¨ν°"
    ],
    "thumbnail": "https://storage.googleapis.com/heropy-api/vBAK4MQdH5v195712.png",
    "isSoldOut": false
  },
  {
    "id": "nbqtQvEivYwEXTDet7YM",
    "title": "MacBook Pro 16",
    "price": 3360000,
    "description": "μ­λ κ°μ₯ κ°λ ₯ν MacBook Proκ° λ±μ₯νμ΅λλ€. μ΅μ΄μ νλ‘μ© Apple SiliconμΈ M1 Pro λλ M1 Max μΉ©μ νμ¬ν΄ μμ΄κ°μ΄ λΉ λ₯Έ μλλ λ¬Όλ‘ , νκΈ°μ μΈ μ±",
    "tags": [
      "κ°μ ",
      "λΈνΈλΆ",
      "μ»΄ν¨ν°"
    ],
    "thumbnail": "https://storage.googleapis.com/heropy-api/vIKMk_jy4Yv195256.png",
    "isSoldOut": false
  }
]
```

### μ μ²΄ νλ§€ λ΄μ­

- κ΄λ¦¬μ μ μ© APIμλλ€.

```curl
curl https://asia-northeast3-heropy-api.cloudfunctions.net/api/products/transactions/all 
  \ -X 'GET'
  \ -H 'masterKey: true'
```

```plaintext
@return {Object[]} - νλ§€ν λͺ¨λ  μ λ³΄ λ΄μ­
```

μμ²­ λ°μ΄ν° μμ:

```js
undefined
```

μλ΅ λ°μ΄ν° μμ:

```json
[
  {
    "detailId": "dMhfxyrAupQP18OYmywy",
    "user": {
      "email": "thesecon@gmail.com",
      "displayName": "ParkYoungWoong",
      "profileImg": "https://storage.googleapis.com/heropy-api/vsLRqTlPO5v200111.png"
    },
    "product": {
      "productId": "cFmeC7aY5KjZbBAdJE9y",
      "title": "μΌμ±μ μ μ€λ§νΈλͺ¨λν° M7 S43AM700",
      "price": 639000,
      "description": "107.9cm(43μΈμΉ) / μμ΄λ(16:9) / νλ©΄ / VA / 3840 x 2160(4K UHD) / ν½μνΌμΉ: 0.2451mm / 8ms(GTG) / 300cd / 5,00",
      "tags": [
        "κ°μ ",
        "λͺ¨λν°",
        "μ»΄ν¨ν°"
      ],
      "thumbnail": "https://storage.googleapis.com/heropy-api/vBAK4MQdH5v195712.png"
    },
    "account": {
      "bankName": "KBκ΅­λ―Όμν",
      "bankCode": "004",
      "accountNumber": "123-XX-XXXX-XXX"
    },
    "reservation": null,
    "timePaid": "2021-11-07T20:01:49.100Z",
    "isCanceled": false,
    "done": false
  }
]
```

μλ΅ λ°μ΄ν°μ `reservation` κ°μ΄ `null`μ΄ μλ κ²½μ° μμ:

```json
[
  {
    "reservation": {
      "start": "2021-11-12T06:00:00.000Z",
      "end": "2021-11-12T07:00:00.000Z",
      "isCanceled": false,
      "isExpired": true
    }
  }
]
```

### νλ§€ λ΄μ­ κ΄λ¦¬

- κ΄λ¦¬μ μ μ© APIμλλ€.
- νλ§€ λ΄μ­μ μ·¨μνλ©΄, μμ½λ κ°μ΄ μ·¨μλ©λλ€.
- νλ§€ λ΄μ­μ μ·¨μ ν΄μ νλ©΄, μμ½λ κ°μ΄ μ·¨μ ν΄μ λ©λλ€.

```curl
curl https://asia-northeast3-heropy-api.cloudfunctions.net/api/products/transactions/:detailId 
  \ -X 'PUT'
  \ -H 'masterKey: true'
```

```plaintext
@param {Boolean} isCanceled - νλ§€ μ·¨μ μ¬λΆ (μ¬μ©μμ 'μ ν κ΅¬λ§€ μ·¨μ' μνμ κ°μ΅λλ€)
@param {Boolean} done - νλ§€ μλ£ μ¬λΆ (μ¬μ©μμ 'μ ν κ΅¬λ§€ νμ ' μνμ κ°μ΅λλ€)
@return {Boolean} - μ²λ¦¬ μ¬λΆ
```

μμ²­ λ°μ΄ν° μμ:

```json
{
  "isCanceled": true
}
```

μλ΅ λ°μ΄ν° μμ:

```js
true
```

### μ ν μΆκ°

- κ΄λ¦¬μ μ μ© APIμλλ€.
- νμΌ(μ¬μ§)μ Base64λ‘ μμ²­ν΄μΌ ν©λλ€.
- μ ν μΈλ€μΌ μ¬μ§μ 1MB μ΄νμ¬μΌ ν©λλ€.
- μ ν μμΈ μ¬μ§μ 4MB μ΄νμ¬μΌ ν©λλ€.

```curl
curl https://asia-northeast3-heropy-api.cloudfunctions.net/api/products 
  \ -X 'POST'
  \ -H 'masterKey: true'
```

```plaintext
@param {String} title - μ ν μ΄λ¦ (νμ!)
@param {Number} price - μ ν κ°κ²© (νμ!)
@param {String} description - μ ν μμΈ μ€λͺ (νμ!)
@param {String[]} tags - μ ν νκ·Έ
@param {String} thumbnailBase64 - μ ν μΈλ€μΌ μ¬μ§ Base64
@param {String} photoBase64 - μ ν μμΈ μ¬μ§ Base64
@return {Object} object - μΆκ°ν μ νμ μμΈ λ΄μ©
```

μμ²­ λ°μ΄ν° μμ:

```json
{
  "title": "MacBook Pro 16",
  "price": 3360000,
  "description": "μ­λ κ°μ₯ κ°λ ₯ν MacBook Proκ° λ±μ₯νμ΅λλ€. μ΅μ΄μ νλ‘μ© Apple SiliconμΈ M1 Pro λλ M1 Max μΉ©μ νμ¬ν΄ μμ΄κ°μ΄ λΉ λ₯Έ μλλ λ¬Όλ‘ , νκΈ°μ μΈ μ±λ₯κ³Ό λλΌμ΄ λ°°ν°λ¦¬ μ¬μ© μκ°μ μλνμ£ . μ¬κΈ°μ μμ μ μ¬λ‘μ‘λ Liquid Retina XDR λμ€νλ μ΄, Mac λΈνΈλΆ μ¬μ μ΅κ³ μ μΉ΄λ©λΌ λ° μ€λμ€ κ·Έλ¦¬κ³  λν  λμ μμ΄ λ€μν ν¬νΈκΉμ§. κΈ°μ‘΄ κ·Έ μ΄λ€ μΉ΄νκ³ λ¦¬μλ μνμ§ μλ λΈνΈλΆ. μλ‘μ΄ MacBook Proλ κ·ΈμΌλ§λ‘ μΌμμλλ€.",
  "tags": [
    "κ°μ ",
    "λΈνΈλΆ",
    "μ»΄ν¨ν°"
  ],
  "thumbnailBase64": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUg...(μλ΅)"
}
```

μλ΅ λ°μ΄ν° μμ:

```json
{
  "id": "nbqtQvEivYwEXTDet7YM",
  "title": "MacBook Pro 16",
  "price": 3360000,
  "description": "μ­λ κ°μ₯ κ°λ ₯ν MacBook Proκ° λ±μ₯νμ΅λλ€. μ΅μ΄μ νλ‘μ© Apple SiliconμΈ M1 Pro λλ M1 Max μΉ©μ νμ¬ν΄ μμ΄κ°μ΄ λΉ λ₯Έ μλλ λ¬Όλ‘ , νκΈ°μ μΈ μ±λ₯κ³Ό λλΌμ΄ λ°°ν°λ¦¬ μ¬μ© μκ°μ μλνμ£ . μ¬κΈ°μ μμ μ μ¬λ‘μ‘λ Liquid Retina XDR λμ€νλ μ΄, Mac λΈνΈλΆ μ¬μ μ΅κ³ μ μΉ΄λ©λΌ λ° μ€λμ€ κ·Έλ¦¬κ³  λν  λμ μμ΄ λ€μν ν¬νΈκΉμ§. κΈ°μ‘΄ κ·Έ μ΄λ€ μΉ΄νκ³ λ¦¬μλ μνμ§ μλ λΈνΈλΆ. μλ‘μ΄ MacBook Proλ κ·ΈμΌλ§λ‘ μΌμμλλ€.",
  "tags": [
    "κ°μ ",
    "λΈνΈλΆ",
    "μ»΄ν¨ν°"
  ],
  "thumbnail": "https://storage.googleapis.com/heropy-api/vIKMk_jy4Yv195256.png",
  "photo": "https://storage.googleapis.com/heropy-api/voihKb3NLGcv195257.png",
  "isSoldOut": false
}
```

### μ ν μμ 

- κ΄λ¦¬μ μ μ© APIμλλ€.
- μ¬μ©μμ κ΅¬λ§€ λ΄μ­ νμΈμ μν΄, μ νμ μ€μ λ‘λ μ­μ νμ§ μκ³  λ§€μ§(Sold Out) μ²λ¦¬ν΄μΌ ν©λλ€.
- λ§€μ§μ λ€μ ν΄μ ν  μ μμ΅λλ€.

```curl
curl https://asia-northeast3-heropy-api.cloudfunctions.net/api/products/:productId
  \ -X 'PUT'
  \ -H 'masterKey: true'
```

```plaintext
@param {String} title - μ ν μ΄λ¦
@param {Number} price - μ ν κ°κ²©
@param {String} description - μ ν μμΈ μ€λͺ
@param {String[]} tags - μ ν νκ·Έ
@param {String} thumbnailBase64 - μ ν μΈλ€μΌ μ¬μ§ 
@param {String} photoBase64 - μ ν μμΈ μ¬μ§
@param {Boolean} isSoldOut - μ ν λ§€μ§ μ¬λΆ
@return {Object} - μμ ν μ νμ μμΈ λ΄μ©
```

μμ²­ λ°μ΄ν° μμ:

```json
{
  "price": 1500
}
```

μλ΅ λ°μ΄ν° μμ:

```json
{
  "id": "nbqtQvEivYwEXTDet7YM",
  "title": "MacBook Pro 16",
  "price": 1500,
  "description": "μ­λ κ°μ₯ κ°λ ₯ν MacBook Proκ° λ±μ₯νμ΅λλ€. μ΅μ΄μ νλ‘μ© Apple SiliconμΈ M1 Pro λλ M1 Max μΉ©μ νμ¬ν΄ μμ΄κ°μ΄ λΉ λ₯Έ μλλ λ¬Όλ‘ , νκΈ°μ μΈ μ±λ₯κ³Ό λλΌμ΄ λ°°ν°λ¦¬ μ¬μ© μκ°μ μλνμ£ . μ¬κΈ°μ μμ μ μ¬λ‘μ‘λ Liquid Retina XDR λμ€νλ μ΄, Mac λΈνΈλΆ μ¬μ μ΅κ³ μ μΉ΄λ©λΌ λ° μ€λμ€ κ·Έλ¦¬κ³  λν  λμ μμ΄ λ€μν ν¬νΈκΉμ§. κΈ°μ‘΄ κ·Έ μ΄λ€ μΉ΄νκ³ λ¦¬μλ μνμ§ μλ λΈνΈλΆ. μλ‘μ΄ MacBook Proλ κ·ΈμΌλ§λ‘ μΌμμλλ€.",
  "tags": [
    "κ°μ ",
    "λΈνΈλΆ",
    "μ»΄ν¨ν°"
  ],
  "thumbnail": "https://storage.googleapis.com/heropy-api/vIKMk_jy4Yv195256.png",
  "photo": "https://storage.googleapis.com/heropy-api/voihKb3NLGcv195257.png",
  "isSoldOut": false
}
```

### λ¨μΌ μ ν μμΈ μ‘°ν

- κ³΅μ© APIμλλ€.

```curl
curl https://asia-northeast3-heropy-api.cloudfunctions.net/api/products/:productId
  \ -X 'GET'
```

```plaintext
@return {Object} - μ νμ μμΈ λ΄μ©
```

μμ²­ λ°μ΄ν° μμ:

```js
undefined
```

μλ΅ λ°μ΄ν° μμ:

```json
{
  "id": "nbqtQvEivYwEXTDet7YM",
  "title": "MacBook Pro 16",
  "price": 3360000,
  "description": "μ­λ κ°μ₯ κ°λ ₯ν MacBook Proκ° λ±μ₯νμ΅λλ€. μ΅μ΄μ νλ‘μ© Apple SiliconμΈ M1 Pro λλ M1 Max μΉ©μ νμ¬ν΄ μμ΄κ°μ΄ λΉ λ₯Έ μλλ λ¬Όλ‘ , νκΈ°μ μΈ μ±λ₯κ³Ό λλΌμ΄ λ°°ν°λ¦¬ μ¬μ© μκ°μ μλνμ£ . μ¬κΈ°μ μμ μ μ¬λ‘μ‘λ Liquid Retina XDR λμ€νλ μ΄, Mac λΈνΈλΆ μ¬μ μ΅κ³ μ μΉ΄λ©λΌ λ° μ€λμ€ κ·Έλ¦¬κ³  λν  λμ μμ΄ λ€μν ν¬νΈκΉμ§. κΈ°μ‘΄ κ·Έ μ΄λ€ μΉ΄νκ³ λ¦¬μλ μνμ§ μλ λΈνΈλΆ. μλ‘μ΄ MacBook Proλ κ·ΈμΌλ§λ‘ μΌμμλλ€.",
  "tags": [
    "κ°μ ",
    "λΈνΈλΆ",
    "μ»΄ν¨ν°"
  ],
  "isSoldOut": false,
  "thumbnail": "https://storage.googleapis.com/heropy-api/vIKMk_jy4Yv195256.png",
  "photo": "https://storage.googleapis.com/heropy-api/voihKb3NLGcv195257.png",
  "reservations": []
}
```

μλ΅ λ°μ΄ν°μ `reservations` κ°μ΄ `[]`(λΉ λ°°μ΄)μ΄ μλ κ²½μ° μμ:

```json
{
  "reservations": [
    {
      "reservation": {
        "start": "2021-11-12T06:00:00.000Z",
        "end": "2021-11-12T07:00:00.000Z",
        "isCanceled": false,
        "isExpired": true
      }
    }
  ] 
}
```

### μ ν κ²μ

- μ¬μ©μ μ μ© APIμλλ€.
- μ ν μ΄λ¦κ³Ό νκ·Έλ₯Ό λμμ κ²μν  μ μκ³ , 'And' μ‘°κ±΄μΌλ‘ κ²°κ³Όλ₯Ό λ°νν©λλ€.
- μ νμ κΈ°λ³Έ μ λ³΄λ§ λ°νν©λλ€.
- λ§€μ§λ μ νμ κ²μλμ§ μμ΅λλ€.

```curl
curl https://asia-northeast3-heropy-api.cloudfunctions.net/api/products/search
  \ -X 'POST'
```

```plaintext
@param {String} searchText - μ ν μ΄λ¦μΌλ‘ κ²μ
@param {Array} searchTags - μ ν νκ·Έλ‘ κ²μ
@return {Object[]} - κ²μν μ ν λ°°μ΄
```

μμ²­ λ°μ΄ν° μμ:

```json
{
  "searchText": "μΌμ±μ μ",
  "searchTags": ["κ°μ "]
}
```

μλ΅ λ°μ΄ν° μμ:

```json
[
  {
    "id": "cFmeC7aY5KjZbBAdJE9y",
    "title": "μΌμ±μ μ μ€λ§νΈλͺ¨λν° M7 S43AM700",
    "price": 639000,
    "description": "107.9cm(43μΈμΉ) / μμ΄λ(16:9) / νλ©΄ / VA / 3840 x 2160(4K UHD) / ν½μνΌμΉ: 0.2451mm / 8ms(GTG) / 300cd / 5,00",
    "tags": [
      "κ°μ ",
      "λͺ¨λν°",
      "μ»΄ν¨ν°"
    ],
    "thumbnail": "https://storage.googleapis.com/heropy-api/vBAK4MQdH5v195712.png"
  }
]
```

### μ ν κ΅¬λ§€ μ μ²­

- μ¬μ©μ μ μ© APIμλλ€.
- κ΅¬λ§€ μ μ²­μ μ°κ²°λ κ³μ’μμ κ²°μ λ©λλ€.
- κ²°μ ν  κ³μ’(ID)λ₯Ό κΌ­ μ νν΄μΌ ν©λλ€.(`κ³μ’ λͺ©λ‘ λ° μμ‘ μ‘°ν` APIλ₯Ό μ¬μ©νμΈμ)
- μ νν κ³μ’μ μμ‘λ³΄λ€ κ²°μ  κΈμ‘μ΄ ν¬λ©΄ κ²°μ  μ²λ¦¬λμ§ μμ΅λλ€.(μλ¬ λ°ν)

```curl
curl https://asia-northeast3-heropy-api.cloudfunctions.net/api/products/buy 
  \ -X 'POST'
  \ -H 'Authorization: Bearer <accessToken>'
```

```plaintext
@param {String} productId - κ΅¬λ§€ν  μ ν ID (νμ!)
@param {String} accountId - κ²°μ ν  κ³μ’ ID (νμ!)
@param {Object} reservation - μμ½ μ λ³΄
@param {String} reservation.start - μμ½ μμ μκ° (ISO)
@param {String} reservation.end - μμ½ μ’λ£ μκ° (ISO)
@return {Boolean} - κ²°μ  μ¬λΆ
```

μμ²­ λ°μ΄ν° μμ:

```json
{
  "productId": "nbqtQvEivYwEXTDet7YM",
  "accountId": "Mq2KKHk8vlmr6Xkg58Fa",
  "reservation": {
    "start": "2021-11-12T06:00:00.000Z",
    "end": "2021-11-12T07:00:00.000Z"
  }
}
```

μλ΅ λ°μ΄ν° μμ:

```json
true
```

### μ ν κ΅¬λ§€ μ·¨μ

- μ¬μ©μ μ μ© APIμλλ€.
- κ΅¬λ§€ μ·¨μμ κ²°μ ν κ³μ’λ‘ νλΆλ©λλ€.

```curl
curl https://asia-northeast3-heropy-api.cloudfunctions.net/api/products/cancel 
  \ -X 'POST'
  \ -H 'Authorization: Bearer <accessToken>'
```

```plaintext
@param {String} detailId - κ΅¬λ§€λ₯Ό μ·¨μν  κ΅¬λ§€ λ΄μ­ ID (νμ!)
@return {Boolean} - μ·¨μ μ¬λΆ
```

μμ²­ λ°μ΄ν° μμ:

```json
{
  "detailId": "dMhfxyrAupQP18OYmywy"
}
```

μλ΅ λ°μ΄ν° μμ:

```json
true
```

### μ ν κ΅¬λ§€ νμ 

- μ¬μ©μ μ μ© APIμλλ€.
- κ΅¬λ§€ νμ  νμλ μ·¨μν  μ μμ΅λλ€.

```curl
curl https://asia-northeast3-heropy-api.cloudfunctions.net/api/products/ok 
  \ -X 'POST'
  \ -H 'Authorization: Bearer <accessToken>'
```

```plaintext
@param {String} detailId - κ΅¬λ§€λ₯Ό νμ ν  κ΅¬λ§€ λ΄μ­ ID (νμ!)
@return {Boolean} - κ΅¬λ§€ νμ  μ¬λΆ
```

μμ²­ λ°μ΄ν° μμ:

```json
{
  "detailId": "dMhfxyrAupQP18OYmywy"
}
```

μλ΅ λ°μ΄ν° μμ:

```json
true
```

### μ ν μ μ²΄ κ΅¬λ§€ λ΄μ­

- μ¬μ©μ μ μ© APIμλλ€.
- λ΄μ­μ κΈ°λ³Έ μ λ³΄λ§ ν¬ν¨λ©λλ€.

```curl
curl https://asia-northeast3-heropy-api.cloudfunctions.net/api/products/transactions/details 
  \ -X 'GET'
  \ -H 'Authorization: Bearer <accessToken>'
```

```plaintext
@return {Object[]} - κ΅¬λ§€ μ λ³΄ λ°°μ΄
```

μμ²­ λ°μ΄ν° μμ:

```js
undefined
```

μλ΅ λ°μ΄ν° μμ:

```json
[
  {
    "detailId": "9jAoagzrZBkSWI5NctEB",
    "product": {
      "productId": "nbqtQvEivYwEXTDet7YM",
      "title": "MacBook Pro 16",
      "price": 3360000,
      "description": "μ­λ κ°μ₯ κ°λ ₯ν MacBook Proκ° λ±μ₯νμ΅λλ€. μ΅μ΄μ νλ‘μ© Apple SiliconμΈ M1 Pro λλ M1 Max μΉ©μ νμ¬ν΄ μμ΄κ°μ΄ λΉ λ₯Έ μλλ λ¬Όλ‘ , νκΈ°μ μΈ μ±",
      "tags": [
        "κ°μ ",
        "λΈνΈλΆ",
        "μ»΄ν¨ν°"
      ],
      "thumbnail": "https://storage.googleapis.com/heropy-api/vIKMk_jy4Yv195256.png"
    },
    "reservation": null,
    "timePaid": "2021-11-07T20:17:32.112Z",
    "isCanceled": true,
    "done": false
  },
  {
    "detailId": "dMhfxyrAupQP18OYmywy",
    "product": {
      "productId": "cFmeC7aY5KjZbBAdJE9y",
      "title": "μΌμ±μ μ μ€λ§νΈλͺ¨λν° M7 S43AM700",
      "price": 639000,
      "description": "107.9cm(43μΈμΉ) / μμ΄λ(16:9) / νλ©΄ / VA / 3840 x 2160(4K UHD) / ν½μνΌμΉ: 0.2451mm / 8ms(GTG) / 300cd / 5,00",
      "tags": [
        "κ°μ ",
        "λͺ¨λν°",
        "μ»΄ν¨ν°"
      ],
      "thumbnail": "https://storage.googleapis.com/heropy-api/vBAK4MQdH5v195712.png"
    },
    "reservation": {
      "start": "2021-11-12T06:00:00.000Z",
      "end": "2021-11-12T07:00:00.000Z",
      "isCanceled": false,
      "isExpired": true
    },
    "timePaid": "2021-11-07T20:01:49.100Z",
    "isCanceled": false,
    "done": true
  }
]
```

### λ¨μΌ μ ν μμΈ κ΅¬λ§€ λ΄μ­

- μ¬μ©μ μ μ© APIμλλ€.

```curl
curl https://asia-northeast3-heropy-api.cloudfunctions.net/api/products/transactions/detail 
  \ -X 'POST'
  \ -H 'Authorization: Bearer <accessToken>'
```

```plaintext
@param {String} detailId - μμΈ λ΄μ©μ νμΈν  κ΅¬λ§€ λ΄μ­ ID (νμ!)
@return {Object} - ν΄λΉ μ νμ μμΈ κ΅¬λ§€ μ λ³΄
```

μμ²­ λ°μ΄ν° μμ:

```json
{
  "detailId": "dMhfxyrAupQP18OYmywy"
}
```

μλ΅ λ°μ΄ν° μμ:

```json
{
  "detailId": "dMhfxyrAupQP18OYmywy",
  "product": {
    "productId": "cFmeC7aY5KjZbBAdJE9y",
    "title": "μΌμ±μ μ μ€λ§νΈλͺ¨λν° M7 S43AM700",
    "price": 639000,
    "description": "107.9cm(43μΈμΉ) / μμ΄λ(16:9) / νλ©΄ / VA / 3840 x 2160(4K UHD) / ν½μνΌμΉ: 0.2451mm / 8ms(GTG) / 300cd / 5,000:1 / μ΅λ μ£Όμ¬μ¨: 60Hz / HDMI 2.0 / USB Type-C / νλ¦¬μ»€ νλ¦¬ / λΈλ£¨λΌμ΄νΈ μ°¨λ¨ / κ²μλͺ¨λ μ§μ / μ€νΌμ»€ / λ¦¬λͺ¨μ»¨ / USBνλΈ / Wi-Fi(λ¬΄μ ) / μ€λ§νΈTV / λΈλ£¨ν¬μ€ / νΈνΈ(μν) / 200 x 200mm / HDR / HDR10 / 10.6kg κΈ°νμ  μ°¨μΈλ κ²μ λΌμ΄ν PS5 λ§€λ ₯λΆμ κ΄λ ¨κΈ°μ¬ νμλ, 43μΈμΉ 4K UHD μ€λ§νΈ λͺ¨λν° βμΌμ±μ μ M7 S43AM700β μΆμ λ° ν μΈ νμ¬ μ¬μ©κΈ° μΌμ± μ€λ§νΈλͺ¨λν° m7 s43am700",
    "tags": [
      "κ°μ ",
      "λͺ¨λν°",
      "μ»΄ν¨ν°"
    ],
    "thumbnail": "https://storage.googleapis.com/heropy-api/vBAK4MQdH5v195712.png",
    "photo": "https://storage.googleapis.com/heropy-api/vVLP-ox_zSDv195712.jpg"
  },
  "account": {
    "bankName": "KBκ΅­λ―Όμν",
    "bankCode": "004",
    "accountNumber": "123-XX-XXXX-XXX"
  },
  "reservation": null,
  "timePaid": "2021-11-07T20:01:49.100Z",
  "isCanceled": false,
  "done": true
}
```
