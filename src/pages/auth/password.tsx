import { AuthResetPassword } from 'features/Auth/AuthResetPassword/AuthResetPassword';
import Layout from 'layouts/Full';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { getSingle } from 'utils/types';

const PasswordPage: NextPage = (props) => {
  const router = useRouter();
  const { query } = router;

  console.log('passwordpage', router);
  // Set router.isReady when the page has mounted
  useEffect(() => {
    console.log('useeffect', router);
  }, [router]);

  return (
    <Layout seo={{ title: 'Reset Password' }}>
      <AuthResetPassword
        resetToken=""
        activationToken=""
        customerId=""
        callbackUrl={(query.callbackUrl && getSingle(query.callbackUrl)) ?? '/auth/signin'}
      />
    </Layout>
  );
};

// export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
//   const action = getSingle(params?.action);
//   const customerId = 'foo';
//   const token = 'bar';

//   console.log(params);

//   return {
//     notFound: !Boolean(customerId),
//     props: {
//       key: customerId,
//       action,
//       token
//     }
//   };
// };

export default PasswordPage;
