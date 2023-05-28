<script lang="ts">
	import Member, { type TMember } from './Member.svelte';
	const members: TMember[] = [
		{
			name: 'Gastón Soria, PhD',
			sub: 'Co-Founder & CSO',
			description:
				'Gastón has a degree in Genetics and a PhD in Cell Biology from Instituto Leloir and the University of Buenos Aires, including a research internship at the Erasmus Medical Center in the Netherlands. He returned to Argentina in 2012 after conducting his postdoctoral training at the Institut Curie in Paris. Together, these experiences account for 13 years of training in different aspects of cancer research, with focus on DNA replication, DNA repair and epigenetics.',
			img: ''
		},
		{
			name: 'Candelaria Llorens, PhD',
			sub: 'Co-Founder & Director of Lab Operations',
			description:
				'Candelaria graduated with a degree in Biology from the Physics and Natural Sciences College of the National University of Córdoba in 2009. Between the years 2012 and 2017, Candelaria was enrolled in a PhD program at the National University of Córdoba, where she focused on the cellular and molecular biology of cancer. The key areas of research for her PhD were mechanisms for intervention in tumoral progression, metastasis and antitumoral therapy resistance.',
			img: ''
		},
		{
			name: 'Gerardo Gatti, PhD',
			sub: 'Co-Founder & Medical-Scientific Liaison',
			description:
				'Gerardo has a degree in Biochemistry and a PhD in Immunology from the College of Chemical Science of the National University of Córdoba. His postdoctoral training took place at the Fundación para el Progreso de la Medicina (FPM), a high-complexity diagnostics lab in Córdoba, Argentina. Gerardo conducted field work at Dr. Mandruzzato’s laboratory at the Department of Oncological and Surgical Sciences, at the University of Padova, Italy and Dr. Coussens’ laboratory at the Department of Cell, Developmental & Cancer Biology, Oregon Health & Science University in Portland.',
			img: ''
		},
		{
			name: 'Tarek A. Zaki',
			sub: 'Co-Founder & CEO',
			description:
				'Tarek studied Entrepreneurship at Babson College in Wellesley, Massachusetts. While at Babson, he co-founded Ando, an urban last-mile package delivery platform based in Buenos Aires that was later acquired by Moova, a well-funded startup in the same space. After graduating Summa Cum Laude from Babson in 2018, Tarek joined a private equity firm in New York called Gatewood Capital Partners, driven to better understand the dynamics of mergers and acquisitions, with the goal of being prepared for future opportunities.',
			img: ''
		}
	];
</script>

<div>
	<div class="md:pr-6 md:w-1/6">
		<h4 class=" text-secondary mb-6">The Team</h4>
		<h2 class="text-primary text-4xl mb-6 leading-snug">You're in good company</h2>
		<p class="text-grey font-medium leading-8 mb-8">
			OncoPrecision's Team is driven by a strong conviction and belief that each person is unique
			and therefore requires tailored care.
		</p>
		<a href="/"><h3 class="font-bold text-grey">+ Meet the rest of the Team</h3></a>
	</div>
</div>
<div>
	{#each members as member}
		<Member name={member.name} />
	{/each}
</div>
