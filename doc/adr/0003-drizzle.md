# 3. Drizzle

Date: 2025-03-26

First, make sure your DB connection is live:

```bash
$ nx dev shared-db
```

Then, some useful commands:

```bash
$ dotenvx run -- nx gen shared-db
$ dotenvx run -- nx migrate shared-db
$ dotenvx run -- nx push shared-db
```

Run the studio with

```bash
$ dotenvx run -- nx studio shared-db
```
