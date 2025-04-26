import React, { useEffect, useState } from 'react';
import { supabase } from '../supabase';
import Breadcrumbs from '../components/Breadcrumbs';
import RegisteredFooter from '../components/RegisteredFooter';
import StudentDashNavbar from '../components/StudentDashNavbar';

const Profile = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [username, setUsername] = useState('');
    const [phone, setPhone] = useState('');

    useEffect(() => {
        // Sample data for user profile
        const sampleUser = {
            id: 'sample-user-id',
            username: 'JohnDoe',
            phone: '123-456-7890',
        };

        // Set sample user data
        setUser(sampleUser);
        setUsername(sampleUser.username);
        setPhone(sampleUser.phone);
        setLoading(false);

        // Uncomment the following code to fetch from Supabase later
        /*
        const fetchUser = async () => {
            const user = supabase.auth.user();
            if (user) {
                const { data, error } = await supabase
                    .from('profiles')
                    .select('*')
                    .eq('id', user.id)
                    .single();

                if (error) {
                    console.error('Error fetching user data:', error);
                } else {
                    setUser(data);
                    setUsername(data.username);
                    setPhone(data.phone);
                }
            }
            setLoading(false);
        };

        fetchUser();
        */
    }, []);

    const handleUpdate = async (e) => {
        e.preventDefault();
        // Logic to update user profile (to be implemented later)
        alert('Profile updated successfully!'); // Placeholder for update confirmation
    };

    if (loading) return <div>Loading...</div>;

    return (
        <div className="flex flex-col min-h-screen">
            <StudentDashNavbar />
            <div className="flex-grow container mx-auto p-4">
                <Breadcrumbs dynamicNames={{ profile: 'Profile' }} />
                <h1 className="text-2xl font-bold my-4">Profile</h1>
                <form onSubmit={handleUpdate} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Phone</label>
                        <input
                            type="text"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        />
                    </div>
                    <button type="submit" className="bg-blue-500 text-white rounded-md p-2">
                        Update Profile
                    </button>
                </form>
            </div>
            <RegisteredFooter />
        </div>
    );
};

export default Profile;
