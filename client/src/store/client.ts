// In a real app this would be tied to an environment variable and a production check
const baseUrl = 'http://localhost:8080';

/**
 * Helper function just in case the server responds with something other than JSON
 */
const parseJson = async (response: Response) => {
    const text = await response.text();
    try {
        const jsonData = JSON.parse(text);
        return jsonData;
    } catch (error) {
        throw new Error('Failed to parse JSON');
    }
};

async function query(path: string = '') {
    const data = await fetch(`${baseUrl}/${path}`)
        .then(parseJson)
        .catch((error) => {
            throw new Error(error);
        });

    return { data };
}

async function mutate<T extends Record<string, unknown>>({
    path,
    body,
    method,
}: {
    path?: string;
    body?: T;
    method: 'POST' | 'PUT' | 'DELETE';
}) {
    let data;

    const query = fetch(`${baseUrl}/${path}`, {
        method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });

    if (method === 'POST') {
        data = query.then((data) => data.json());
    } else {
        data = query;
    }

    return { data };
}

export { query, mutate };
