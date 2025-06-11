import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_API_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

export const getPosts = async () => {

    let { data: posts, error } = await supabase
        .from('posts')
        .select('*');

    return posts;

}

export const getPostById = async (id) => {

    let { data } = await supabase
        .from('posts')
        .select('*')
        .eq('id', id);

    if(!data){
        return {}
    }

    return data[0];
    
}