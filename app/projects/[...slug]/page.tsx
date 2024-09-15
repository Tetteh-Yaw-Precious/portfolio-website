import { getProject } from '@/sanity/sanity-utils';
import ProjectDetailPage from '@/components/projectdetailpage';
type props = {
	params: { slug: string };
};

export default async function Page({ params }: props) {
	const slug = params.slug;
	const project = await getProject(slug[0]);

	return (
		<>
			<ProjectDetailPage viewProject={project} />
		</>
	);
}
