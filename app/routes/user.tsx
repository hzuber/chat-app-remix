import { useState } from "react";
import IconSelection from "../components/Modals/IconSelector";
import { ActionFunctionArgs, json } from "@remix-run/node";
import { authenticator } from "server/services/auth.server";
import { updateUser } from "server/users/utils";
import { Form } from "@remix-run/react";

const UserProfile = () => {
  const [currentIcon, setCurrentIcon] = useState<string | null>(null);

  // Simulate API call to save the selected icon to the user's profile
  const saveIconToDatabase = async (selectedIcon: string) => {
    console.log("save");
    try {
      const response = await fetch("/api/save-icon", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ icon: selectedIcon }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Icon saved successfully:", data);
        setCurrentIcon(selectedIcon); // Update current icon after saving
      } else {
        console.error("Failed to save icon");
      }
    } catch (error) {
      console.error("Error saving icon:", error);
    }
  };

  return (
    <div>
      <h1>User Profile</h1>
      <p>Current Icon: {currentIcon || "None selected"}</p>
      <Form method="post" className="mt-5">
        <IconSelection onSaveIcon={SubmitEvent} currentIcon={currentIcon} />
      </Form>
    </div>
  );
};

export async function action({ request }: ActionFunctionArgs) {
  const { icon } = await request.json();
  const auth = await authenticator.isAuthenticated(request);
  // Save the selected icon to the database (example for Prisma)
  // Assuming you have a User model with an `icon` field
  const userId = auth?.id; // Assuming you have a function to get the user ID
  userId && updateUser(userId, { icon: icon });

  return json({ success: true });
}

export default UserProfile;
