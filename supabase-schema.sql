-- Create users table
CREATE TABLE IF NOT EXISTS users (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    google_id TEXT UNIQUE,
    email TEXT UNIQUE NOT NULL,
    name TEXT,
    avatar TEXT,
    join_date TEXT DEFAULT to_char(now(), 'Mon YYYY'),
    orders INTEGER DEFAULT 0,
    wishlist INTEGER DEFAULT 0,
    reviews INTEGER DEFAULT 0,
    custom_designs INTEGER DEFAULT 0,
    address JSONB DEFAULT '{}',
    orders_list JSONB DEFAULT '[]',
    notifications BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create a function to update the updated_at column
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_users_updated_at 
    BEFORE UPDATE ON users 
    FOR EACH ROW 
    EXECUTE PROCEDURE update_updated_at_column();

-- Enable RLS (Row Level Security)
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- Create policies for authenticated users
CREATE POLICY "Users can view their own data" ON users
    FOR SELECT USING (auth.uid() = id::text OR auth.role() = 'service_role');

CREATE POLICY "Users can update their own data" ON users
    FOR UPDATE USING (auth.uid() = id::text OR auth.role() = 'service_role');

CREATE POLICY "Users can insert their own data" ON users
    FOR INSERT WITH CHECK (auth.uid() = id::text OR auth.role() = 'service_role');