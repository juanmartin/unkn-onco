<script>
	import '../app.postcss';
	import {
		Navbar,
		NavBrand,
		NavLi,
		NavUl,
		NavHamburger,
		Dropdown,
		DropdownItem,
		Chevron,
		DropdownDivider
	} from 'flowbite-svelte';
	import { Footer, FooterCopyright, FooterLinkGroup, FooterLink } from 'flowbite-svelte';
	import Header from '../utils/components/Header.svelte';

	let logo = 'onco-logo.svg';
</script>

<Header title="Unlocking unique treatments for unique patients." />

<Navbar let:hidden let:toggle class="py-2.5 w-full fixed top-0 bg-transparent ">
	<NavBrand href="/">
		<img src={logo} class="mr-3 h-6 sm:h-9" alt="OncoPrecision Logo" />
	</NavBrand>
	<NavHamburger on:click={toggle} />
	<NavUl {hidden}>
		<NavLi href="/" active={false}>Precision Oncology</NavLi>
		<NavLi id="nav-menu1">Our Platform</NavLi>
		<Dropdown triggeredBy="#nav-menu1" class="w-44 z-20">
			<DropdownItem>Technology</DropdownItem>
			<DropdownItem>Applications</DropdownItem>
		</Dropdown>
		<NavLi id="nav-menu2">About</NavLi>
		<Dropdown triggeredBy="#nav-menu2" class="w-44 z-20">
			<DropdownItem>Team</DropdownItem>
			<DropdownItem>Advisors</DropdownItem>
			<DropdownItem>Partners</DropdownItem>
		</Dropdown>
		<NavLi href="/">Resources</NavLi>
		<NavLi href="/">Contact</NavLi>
	</NavUl>
</Navbar>

<main class="py-2.5 w-full">
	<!-- <div class="wrapper"> -->
	<slot />
	<!-- </div> -->
</main>

<Footer>
	<FooterCopyright href="/" by="OncoPrecision - UNKN" year={2023} />
	<FooterLinkGroup
		ulClass="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0"
	>
		<span class="pr-1">Website designed with love by </span>
		<FooterLink href="https://juanm.art">Juan Martin SM</FooterLink>
	</FooterLinkGroup>
</Footer>
