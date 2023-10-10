// In a real app this would be tied to an environment variable and a production check
const baseUrl = 'http://localhost:8080';

async function query(path: string = '') {
    const data = await fetch(`${baseUrl}/${path}`).then((data) => data.json());
    return { data };
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
    const data = await fetch(`${baseUrl}/${path}`, {
        method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    }).then((data) => data.json());

    return { data };
}

export { query, mutate };
