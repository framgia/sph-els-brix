import Authenticated from "@/Layouts/Authenticated";
import Button from "@/Components/Button";
import { Head, Link } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";

const Categories = ({ auth, categories, errors }) => {
  return (
    <Authenticated auth={auth} errors={errors}>
      <Head title="Categories" />

      <div className="py-6">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 bg-white border-b border-gray-200">
              {categories.map(({ id, title, description, checkpoint }) => (
                <div className="mt-4 p-4 border rounded" key={id}>
                  <h1 className="font-bold">{title}</h1>
                  <p>{description}</p>
                  {checkpoint !== null && checkpoint.can_start ? (
                    checkpoint.is_finished ? (
                      <p className="mt-4">
                        Finished at {checkpoint.updated_at}
                      </p>
                    ) : (
                      <Link href={route("questions", id)}>
                        <Button className="mt-4">Start</Button>
                      </Link>
                    )
                  ) : (
                    <Button className="mt-4" processing={true}>
                      Locked
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Authenticated>
  );
};

export default Categories;
