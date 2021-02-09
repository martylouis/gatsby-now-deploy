import DownloadCard from '@/components/Download';
import dayjs from 'dayjs';
import Timestamp from '@/components/Timestamp';
import { sanityClient, urlFor } from '@/lib/sanity';

const Test = ({ uploads }) => {
  return (
    <div>
      <pre>{JSON.stringify(uploads, null, 2)}</pre>
      {uploads.map(
        ({ _id: id, description, publishedAt, uploadType, uploadURL }) => (
          <div key={id}>
            <div>Title: {description}</div>
            <div>
              <Timestamp date={publishedAt} />
            </div>
            <div>
              <a
                href={`${uploadURL}?dl=${uploadType}-${dayjs(
                  publishedAt
                ).format('YYYY-MM-DD')}.pdf`}
                download
              >
                Download
              </a>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Test;

export async function getStaticProps() {
  const uploads = await sanityClient.fetch(`
    *[_type == "upload"] {
      _id,
      _createdAt,
      description,
      publishedAt,
      uploadType,
      "uploadURL": uploadFile.asset->url
    }
  `);

  return {
    props: {
      uploads,
    },
  };
}
