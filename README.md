# Installation for backend

To get started first acces the virtual env with :
macOs/Linux : `source env/bin/activate`, or windows : `.\env\Scripts\activate`.

if you don't have a virtual enviroment yet, you can create one with :

```sh
python -m venv env
```

unless you have a virtual enviroment already installed, for mac & linux use pyhton3.

then navigate the the root folder of django project and lunch the command :

```sh
pip install -r requirements.txt / pip3 install -r requirements.txt
```

, and then

```sh
python3 manage.py runserver / py manage.py runserver
```

to run the server locacly

<!-- ## Contribute

Feel free to contribute to Crafting hub backend project, you can find the source code on [Github]


## License

coming soon ... -->

# Frontend

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
# to install node modules
npm i
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
