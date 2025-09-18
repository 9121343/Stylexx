// Supabase User operations
class User {
  static async findOne(query) {
    const supabase = global.supabase;
    let supabaseQuery = supabase.from('users').select('*');
    
    if (query.googleId) {
      supabaseQuery = supabaseQuery.eq('google_id', query.googleId);
    }
    if (query.email) {
      supabaseQuery = supabaseQuery.eq('email', query.email);
    }
    
    const { data, error } = await supabaseQuery.single();
    if (error && error.code !== 'PGRST116') throw error;
    return data;
  }

  static async findById(id) {
    const supabase = global.supabase;
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error && error.code !== 'PGRST116') throw error;
    return data;
  }

  static async create(userData) {
    const supabase = global.supabase;
    const { data, error } = await supabase
      .from('users')
      .insert({
        google_id: userData.googleId,
        email: userData.email,
        name: userData.name,
        avatar: userData.avatar
      })
      .select()
      .single();
    
    if (error) throw error;
    return data;
  }

  static async findByIdAndUpdate(id, updateData, options = {}) {
    const supabase = global.supabase;
    
    // Convert address object to proper format if present
    const updateFields = {};
    if (updateData.address) {
      updateFields.address = updateData.address;
    }
    
    const { data, error } = await supabase
      .from('users')
      .update(updateFields)
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  }
}

module.exports = User;
