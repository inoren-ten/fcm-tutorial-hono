import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { messageObject } from './constant/messageObject';
import { MessageParamsType } from './types/messageParamsType';
import { sendMessage } from './firebase/sendMessage';

const app = new Hono()
app.post('/notification', async (c) =>{
    const params = await c.req.json<MessageParamsType>();
    const message = messageObject({
        tokens: params.tokens,
        title: params.title,
        body: params.body,
        image: params.image,
        url: params.url
    });

    sendMessage.send(message)
        .then((response) => {
            console.log('Successfully sent message:', response);
        })
})

serve(app)
