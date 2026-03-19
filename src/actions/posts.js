export const postAction = async ({ request }) => {
  if (request.method !== 'POST') {
    return { error: 'Invalid request method' };
  }

  try {
    const formData = await request.formData();
    const postData = {
      userId: parseInt(formData.get('userId')),
      id: parseInt(formData.get('id')),
      title: formData.get('title'),
      body: formData.get('body')
    };

    if (!postData.title || !postData.body) {
      return { error: 'Title and body are required' };
    }

    return { success: true, post: postData };
  } catch (error) {
    return { error: error.message };
  }
};