import { MessageParamsType } from "../types/messageParamsType";

export const messageObject = (params: MessageParamsType) => {
    const {tokens, title, body, image, url} = params;

    return {
        topic: 'AniSphere',
        tokens: tokens,
        data: {},
        notification: {
            title: title,
            body: body,
            image: image ? image : 'https://res.cloudinary.com/ddohwn6t3/image/upload/v1690182672/e4jb8b1rmz9hhy0j0vjs.png',
        },
        android: {
            collapseKey: title,
            notification: {
                clickAction: url,
            },
        },
        apns: {
            payload: {
                aps: {
                    'category': url,
                },
            },
        },
        webpush: {
            fcmOptions: {
                link: url,
            },
        },
    }
};
