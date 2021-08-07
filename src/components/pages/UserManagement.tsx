import { Center, Spinner, Wrap, WrapItem } from "@chakra-ui/react";
import { memo, useEffect, VFC } from "react";
import { UserCard } from "../organisms/layout/user/UserCard";
import { useAllUsers } from "../../hooks/userAllUsers"

export const UserManagement: VFC = memo(() => {
  const { getUsers, users, loading } = useAllUsers();

  //初回だけgetUsers()を実行する
  useEffect(() => getUsers(), [])

  return (
    <>
      {loading ?
        <Center h="100vh">
          <Spinner />
        </Center>
        : (
          <Wrap p={{ base: 4, md: 10 }} justify="center">
            {users.map((user) => (
              <WrapItem key={user.id} >
                <UserCard
                  imageUrl="https://source.unsplash.com/random"
                  userName={user.username}
                  fullName={user.name}
                />
              </WrapItem>
            ))}
          </Wrap>
        )}
    </>
  )
});