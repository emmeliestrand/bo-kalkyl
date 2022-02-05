import { api } from './_api';

// PATCH /todos/:uid.json
export const patch = async(event) => {
    const data = await event.request.formData();

    return api(event, `profile/${event.locals.userid}/${event.params.uid}`, {
        text: data.get('text'),
        done: data.has('done') ? !!data.get('done') : undefined
    });
};

// DELETE /todos/:uid.json
export const del = async(event) => {
    return api(event, `profile/${event.locals.userid}/${event.params.uid}`);
};