// dependencies
import Head from 'next/head';
// layout
import { DefaultLayout } from '../../layout';
// components
import { Table } from '../../components';
import { Hero } from '../../components/hero';
// content
import { DesignLayoutContent } from '../../content/layoutContent';
import { HeroContent, TableContent } from '../../content/designContent';

const Design = ({
}) => {

    return (
        <DefaultLayout content={DesignLayoutContent}>
            <Head>
                <title>Design</title>
            </Head>
            
            <Hero id='design-page-title' content={HeroContent} />
            <Table id='table' content={TableContent} />
        </DefaultLayout>
    );
}

export default Design;