// In a real app this would be tied to an environment variable and a production check
const baseUrl = 'http://localhost:8080';

async function query(path: string = '') {
    return await fetch(`${baseUrl}/${path}`).then((data) => data.json());
}

async function mutate<T extends Record<string, string>>({
    path,
    body,
    method,
}: {
    path?: string;
    body?: T;
    method: 'POST' | 'PUT' | 'DELETE';
}) {
    return await fetch(`${baseUrl}/${path}`, {
        method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    }).then((data) => data.json());
}

export { query, mutate };
