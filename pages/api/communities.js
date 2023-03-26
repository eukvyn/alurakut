import { buildClient } from '@datocms/cma-client-node';

export default async function customRequest(request, response) {
    
    if (request.method === 'POST') {
        
        const client = buildClient({apiToken: process.env.REACT_APP_API_TOKEN_DATO_FULL})
    
        const data = await client.items.create({
            item_type: { type: 'item_type', id: '1244835' },
            ...request.body
        })
    
        response.json({
            data: data
        })
        
        return
    }
    
    response.status(404).json({
        'message': 'this endpoint is POST only'
    })

}