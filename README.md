# PrestigeRank

A crowdsourced ranking system for company prestige. Built with Deno, Fresh, and
Supabase.

## Building Locally

Make sure to install Deno: https://deno.land/manual/getting_started/installation

Then start the project:

```bash
make start
```

or, if `make` isn't installed:

```bash
deno task start --env-file=.env
```

## Project structure

`/components` - modular & resuable html\
`/data` - CSV files, SQL scripts, etc. related to rankings data\
`/islands` - the same as `/components` but when frontend javascript is required\
`/routes` - pages and API, these are what actual website URLs map to\
`/static` - static content like images and icons\
`/util` - Utility for TypeScript code, like types, supabase client, etc
