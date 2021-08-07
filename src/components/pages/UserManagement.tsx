import { Center, Spinner, Wrap, WrapItem, useDisclosure } from '@chakra-ui/react';
import { memo, useEffect, VFC, useCallback } from 'react';
import { UserCard } from "../organisms/layout/user/UserCard";
import { useAllUsers } from "../../hooks/userAllUsers"
import { UserDetailModal } from '../organisms/layout/user/UserDetailModal';
import { useSelectUser } from '../../hooks/useSelectUser';

export const UserManagement: VFC = memo(() => {
  const { getUsers, users, loading } = useAllUsers();
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { onSelectUser, selectedUser } = useSelectUser();
  //初回だけgetUsers()を実行する
  useEffect(() => getUsers(), [])

  const onClickUser = useCallback((id: number) => {
    onSelectUser({ id, users, onOpen });
  }, [users,onSelectUser,onOpen]);
  //依存配列がusersの理由は,usersの中身は読み込まれていないが,users自体は新しくレンダリングされているから 
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
                  id={user.id}
                  imageUrl="https://source.unsplash.com/random"
                  userName={user.username}
                  fullName={user.name}
                  onClick={onClickUser}
                />
              </WrapItem>
            ))}
          </Wrap>
        )}
      <UserDetailModal user={selectedUser} isOpen={isOpen} onClose={onClose} />
    </>
  )
});