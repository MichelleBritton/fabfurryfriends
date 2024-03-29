import { rest } from "msw";

const baseURL = "http://localhost/";

export const handlers = [
    rest.get(`${baseURL}api/dj-rest-auth/user/`, (req,res,ctx) => {
        return res(
            ctx.json({
                "pk": 1,
                "username": "Michelle",
                "email": "michelle@daisy-webdesign.co.uk",
                "first_name": "",
                "last_name": "",
                "profile_id": 1,
                "profile_image": "https://res.cloudinary.com/dkxdppkpe/image/upload/v1/media/images/IMG_3931_djfjqz",
                "is_admin_user": true
            })
        );
    }),

    rest.post(`${baseURL}api/dj-rest-auth/logout/`, (req,res,ctx) => {
        return res(ctx.status(200));
    }),
];