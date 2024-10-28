import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
  Box,
} from "@chakra-ui/react";
import {
  CreditCard,
  Heart,
  LogOut,
  Package,
  Settings,
  User,
} from "lucide-react";
import { useState } from "react";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("account");

  return (
    <main className="container h-screen flex-1 py-8">
      <div className="flex flex-col gap-8 md:flex-row">
        <aside className="w-full md:w-64">
          <Card>
            <CardHeader>
              <h1 className="text-2xl font-bold">My Account</h1>
            </CardHeader>
            <CardBody>
              <div className="mb-6 flex flex-col items-center space-x-4">
                <Avatar
                  size="xl"
                  name="Jane Doe"
                  src="https://images.pexels.com/photos/27893233/pexels-photo-27893233/free-photo-of-woman-in-shirt-photographing-with-digital-camera.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  bg="gray.200"
                  color="gray.700"
                  fontWeight="bold"
                  fontSize="lg"
                />
              </div>
              <nav className="space-y-2">
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  onClick={() => setActiveTab("account")}
                >
                  <User className="mr-2 size-4" />
                  Account Details
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  onClick={() => setActiveTab("orders")}
                >
                  <Package className="mr-2 size-4" />
                  Orders
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  onClick={() => setActiveTab("wishlist")}
                >
                  <Heart className="mr-2 size-4" />
                  Wishlist
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  onClick={() => setActiveTab("payment")}
                >
                  <CreditCard className="mr-2 size-4" />
                  Payment Methods
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  onClick={() => setActiveTab("settings")}
                >
                  <Settings className="mr-2 size-4" />
                  Settings
                </Button>
              </nav>
            </CardBody>
            <CardFooter>
              <Button
                bg="red.700"
                color={"white"}
                _hover={{ bg: "red.600" }}
                className="w-full"
              >
                <LogOut className="mr-2 size-4" />
                Log Out
              </Button>
            </CardFooter>
          </Card>
        </aside>
        <div className="flex-1">
          {activeTab === "account" ? (
            <Card>
              <CardHeader>
                <h2 className="text-lg font-semibold">Account Details</h2>
                <p className="text-sm text-gray-500">
                  Update your account information here.
                </p>
              </CardHeader>
              <CardBody className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName">First Name</label>
                    <Input id="firstName" placeholder="Jane" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName">Last Name</label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email">Email</label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="jane.doe@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone">Phone</label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </CardBody>
              <CardFooter>
                <Button colorScheme="orange">Save Changes</Button>
              </CardFooter>
            </Card>
          ) : activeTab === "orders" ? (
            <Card>
              <CardHeader>
                <h2 className="text-lg font-semibold">Order History</h2>
                <p className="text-sm text-gray-500">
                  View and manage your recent orders.
                </p>
              </CardHeader>
              <CardBody className="space-y-4">
                {[1, 2, 3].map((order) => (
                  <Box
                    key={order}
                    borderBottom="1px"
                    borderColor="gray.200"
                    pb="4"
                  >
                    <p className="font-semibold">
                      Order #{order.toString().padStart(5, "0")}
                    </p>
                    <p className="text-sm text-gray-500">
                      Placed on: {new Date().toLocaleDateString()}
                    </p>
                    <Button variant="outline" size="sm" mt="2">
                      View Details
                    </Button>
                  </Box>
                ))}
              </CardBody>
            </Card>
          ) : activeTab === "wishlist" ? (
            <Card>
              <CardHeader>
                <h2 className="text-lg font-semibold">Wishlist</h2>
                <p className="text-sm text-gray-500">
                  Items you've saved for later.
                </p>
              </CardHeader>
              <CardBody className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {[1, 2, 3, 4].map((item) => (
                  <Box key={item} className="flex items-center space-x-4">
                    <img
                      src="/placeholder.svg"
                      alt={`Wishlist item ${item}`}
                      className="h-20 w-20 object-cover"
                    />
                    <div>
                      <h3 className="font-semibold">Product Name</h3>
                      <p className="text-sm text-gray-500">$99.99</p>
                      <Button size="sm" colorScheme="orange" mt="2">
                        Add to Cart
                      </Button>
                    </div>
                  </Box>
                ))}
              </CardBody>
            </Card>
          ) : activeTab === "payment" ? (
            <Card>
              <CardHeader>
                <h2 className="text-lg font-semibold">Payment Methods</h2>
                <p className="text-sm text-gray-500">
                  Manage your saved payment methods.
                </p>
              </CardHeader>
              <CardBody className="space-y-4">
                {[1, 2].map((method) => (
                  <Box
                    key={method}
                    borderBottom="1px"
                    borderColor="gray.200"
                    pb="4"
                    className="flex justify-between"
                  >
                    <Box className="flex items-center space-x-4">
                      <CreditCard className="h-6 w-6" />
                      <div>
                        <p className="font-semibold">
                          Visa ending in {method === 1 ? "1234" : "5678"}
                        </p>
                        <p className="text-sm text-gray-500">
                          Expires 12/{method === 1 ? "24" : "25"}
                        </p>
                      </div>
                    </Box>
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                  </Box>
                ))}
              </CardBody>
              <CardFooter>
                <Button colorScheme="orange">Add New Payment Method</Button>
              </CardFooter>
            </Card>
          ) : (
            activeTab === "settings" && (
              <Card>
                <CardHeader>
                  <h2 className="text-lg font-semibold">Account Settings</h2>
                  <p className="text-sm text-gray-500">
                    Manage your account preferences and security.
                  </p>
                </CardHeader>
                <CardBody className="space-y-4">
                  <Box>
                    <label htmlFor="language">Preferred Language</label>
                    <select id="language" className="w-full rounded border p-2">
                      <option>English</option>
                      <option>Spanish</option>
                      <option>French</option>
                    </select>
                  </Box>
                  <Box>
                    <label htmlFor="notifications">Email Notifications</label>
                    <div className="flex items-center">
                      <input type="checkbox" id="notifications" />
                      <label htmlFor="notifications" className="ml-2">
                        Receive promotional emails
                      </label>
                    </div>
                  </Box>
                  <Box>
                    <label htmlFor="newPassword">Change Password</label>
                    <Input
                      id="newPassword"
                      type="password"
                      placeholder="New password"
                    />
                  </Box>
                </CardBody>
                <CardFooter>
                  <Button colorScheme="orange">Save Settings</Button>
                </CardFooter>
              </Card>
            )
          )}
        </div>
      </div>
    </main>
  );
};

export default Profile;
