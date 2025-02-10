export async function onRequest(context) {
	
  console.log(`Request from ${context.request.url} / ${context.params.dane} `);

  return new Response(JSON.stringify({ number: context.params.dane }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });

}
