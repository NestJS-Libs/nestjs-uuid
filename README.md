# nestjs-uuid

## Installation

```bash
yarn add nestjs-uuid
```

```bash
npm i nestjs-uuid
```

---

<br>

## How to use

<br>

Import module:

```ts
@Module({
  imports: [
    UuidModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```

---

<br>

Inject uuid service into a provider:

```ts
@Injectable()
export class AppService {
  constructor(@InjectUuidService() private readonly uuidService: UuidService) {}

  getHello() {
    return this.uuidService.generate();
  }
}
```

```ts
  getHello() {
    return this.uuidService.generate({ version: 1 });
  }
```

```ts
  getHello() {
    return this.uuidService.generate({ version: 4 });
  }
```

---

<div align="center">
    <a href="https://github.com/fdorantesm" target="_blank">
        <img src=https://img.shields.io/badge/github-%2324292e.svg?&style=for-the-badge&logo=github&logoColor=white alt=github style="margin-bottom: 5px;" />
    </a>
    <a href="https://twitter.com/fdorantesm" target="_blank">
        <img src=https://img.shields.io/badge/twitter-%2300acee.svg?&style=for-the-badge&logo=twitter&logoColor=white alt=twitter style="margin-bottom: 5px;" />
    </a>
    <a href="https://linkedin.com/in/fdorantesm" target="_blank">
        <img src=https://img.shields.io/badge/linkedin-%231E77B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white alt=linkedin style="margin-bottom: 5px;" />
    </a>
    <a href="https://www.youtube.com/user/FernandoDorantes" target="_blank">
        <img src=https://img.shields.io/badge/youtube-%23EE4831.svg?&style=for-the-badge&logo=youtube&logoColor=white alt=youtube style="margin-bottom: 5px;" />
    </a>
    <a href="https://stackoverflow.com/users/6484286" target="_blank">
        <img src=https://img.shields.io/badge/stackoverflow-%23F28032.svg?&style=for-the-badge&logo=stackoverflow&logoColor=white alt=stackoverflow style="margin-bottom: 5px;" />
    </a>
    <a href="https://codepen.com/fdorantesm" target="_blank">
        <img src=https://img.shields.io/badge/codepen-%23131417.svg?&style=for-the-badge&logo=codepen&logoColor=white alt=codepen style="margin-bottom: 5px;" />
    </a>
</div>

<br/>  

<div align="center">
    <a href="https://paypal.me/fdorantesm" target="_blank" style="display: inline-block;">
        <img src="https://img.shields.io/badge/Donate-PayPal-blue.svg?style=flat-square&logo=paypal" align="center" />
    </a>
</div>  
