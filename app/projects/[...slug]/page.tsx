import { getProject } from '@/sanity/sanity-utils';
import ProjectDetailPage from '@/components/projectdetailpage';
import urlFor from '@/library/urlFor';

type props = {
	params: { slug: string };
};

export default async function Page({ params }: props) {
	const slug = params.slug;
	const project = await getProject(slug[0]);
	// console.log(project.content);

	const imageExample = {
		asset: {
			_ref: 'image-8ba07f5ec1269a0d03bdfd31f018c82c407544e9-2000x1000-png',
			_type: 'reference',
		},
	};
	const imageUrl = urlFor(imageExample).url();

	// Check if project is defined
	if (!project) {
		return <div>Loading...</div>; // Handle loading state
	}

	return (
		<>
			<ProjectDetailPage viewProject={project} />
		</>
	);
}
