import * as React from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Modal from 'react-modal';
import RarityList from '../chiafriends/components/RarityList';
import Token from '../chiafriends/components/Token';
import { rarityStore } from '../chiafriends/helpers/rarity';
import { modalStyles } from '../chiafriends/utils/styles';

const Home: NextPage = ({ traits, count, intialTokens, meta }: any) => {
  const router = useRouter();

  const [tokens, setTokens] = React.useState(intialTokens);
  const [activeToken, setActiveToken] = React.useState<any>();

  const getActiveToken = () => {
    const listToken = tokens.data.find(
      (token: any) => token.id === Number(router.query.viewId)
    );
    if (listToken) setActiveToken(listToken);
    setActiveToken(rarityStore.getById(router.query.viewId));
  };

  const close = () => {
    router.back();
  };

  React.useEffect(() => {
    getActiveToken();
  }, [router.query.viewId]);

  return (
    <>
      <Modal
        isOpen={!!router.query.viewId}
        style={modalStyles}
        ariaHideApp={false}
        className="bg-transparent p-2 z-30 relative h-screen bg-white rounded-lg overflow-hidden"
        onRequestClose={close}
        contentLabel="token view modal"
      >
        <Token
          id={router.query.viewId}
          pathname={router.pathname}
          token={activeToken}
          count={count}
          traits={traits}
          meta={meta}
          close={close}
        />
      </Modal>

      <div className="dark:bg-gray-900 bg-white pt-6">
        <div className="max-w-screen-xl mx-auto sm:px-5 md:px-0">
          <RarityList
            tokens={tokens}
            setTokens={setTokens}
            count={count}
            traits={traits}
            meta={meta}
          />
        </div>
      </div>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  return {
    props: {
      traits: rarityStore.getTraits(),
      count: rarityStore.getCount(),
      intialTokens: rarityStore.getPage({
        traitCount: [],
        limit: 20,
        offset: 0,
        traits: []
      }),
      meta: rarityStore.getMeta()
    }
  };
}
