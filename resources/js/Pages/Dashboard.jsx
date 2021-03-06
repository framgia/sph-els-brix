import { Head } from "@inertiajs/inertia-react";

import Authenticated from "@/Layouts/Authenticated";
import UserOverview from "@/Components/UserOverview";

const Dashboard = ({ auth, errors }) => {
  return (
    <Authenticated auth={auth} errors={errors}>
      <Head title="Dashboard" />

      <div className="py-6">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 bg-white border-b border-gray-200 flex">
              <UserOverview
                firstname={auth.user.firstname}
                lastname={auth.user.lastname}
              />
            </div>
          </div>
        </div>
      </div>
    </Authenticated>
  );
};

export default Dashboard;
