import React from 'react'
import './style.css'
import icon from './icon.ico'
import ModalImage from 'react-modal-image'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  icon: {
    width: 48,
    height: 48,
    margin: 5,
  },
  title: {
    textAlign: 'center',
    flexGrow: 1,
  },
  post: {
    margin: 10,
    padding: 10,
    border: '1px solid black',
  },
  screenshots: {
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
  demoLink: {
    fontSize: '200%',
    display: 'block',
    [theme.breakpoints.down('md')]: {
      fontSize: '100%',
    },
  },
  anchorLink: {
    color: '#444',
    fontSize: '200%',
    [theme.breakpoints.down('md')]: {
      fontSize: '100%',
    },
  },
  toolbar: {
    background: '#0d233f',
  },
}))

function Header() {
  const classes = useStyles()
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography className={classes.title} variant="h6">
          <img alt="logo" src={icon} className={classes.icon} />
          JBrowse 2 demos
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
function App() {
  const classes = useStyles()
  return (
    <>
      <Header />
      <Readme />

      <div id="parentDiv">
        <div className={classes.post}>
          <a className={classes.anchorLink} href="#1" name="1">
            Fig 1 - Breakpoint split view showing a translocation
          </a>
          <ModalImage
            small="resized.breakpoint-split-view.png"
            large="breakpoint-split-view.png"
          />
          <p>
            With a complex structural variant like a translocation, we can show
            a stacked linear-genome-view which we call the "breakpoint split
            view". This has one chromosome in one view and another view on the
            bottom, with split long-read alignments joined between the two views
            by black curves. The VCF feature indicating the translocation is
            also plotted as the thicker green line also.
          </p>
          <a
            className={classes.demoLink}
            href="https://s3.amazonaws.com/jbrowse.org/code/jb2/master/index.html?config=test_data%2Fconfig_demo.json&session=share-eOhpnaupOt&password=85sGE"
          >
            Demo
          </a>
        </div>
        <div className={classes.post}>
          <a className={classes.anchorLink} href="#2" name="2">
            Fig 2 - SV inspector with spreadsheet and circos overview
          </a>
          <ModalImage small="resized.svinspector.png" large="svinspector.png" />
          <a
            className={classes.demoLink}
            href="https://s3.amazonaws.com/jbrowse.org/code/jb2/master/index.html?config=test_data%2Fconfig_demo.json&session=share-UowPTMMwfw&password=NiNBX"
          >
            Demo
          </a>
          <p>
            Our breakpoint split view enables users to see a whole genome
            overview of structural variants. It is currently primarily aimed at
            visualizing inter-chromosomal events such as VCF breakends and
            &lt;TRA&gt; events. It can also accept regular BEDPE, STAR-fusion
            output files, and more.
          </p>
          <p>
            The SV inspector is a mashup of the circular view and the tabular
            data view. Users can launch regular linear genome views through
            different variants by clicking on the blue links. They can also
            launch a breakpoint split view by clicking the dropdown on the
            leftmost part of each grid row.
          </p>
        </div>

        <div className={classes.post}>
          <a className={classes.anchorLink} href="#3" name="3">
            Fig 3 - Dotplot/synteny of long read vs reference
          </a>
          <div className={classes.screenshots}>
            <div style={{ padding: 20 }}>
              <ModalImage small="resized.synteny.png" large="synteny.png" />
            </div>
            <div style={{ padding: 20 }}>
              <ModalImage small="resized.dotplot.png" large="dotplot.png" />
            </div>
          </div>
          <p>
            Long read "synteny" of the "long read vs reference" can be obtained
            simply by right clicking a read in the alignments track and
            selecting the context menu option. These two screenshots show the
            exact same PacBio SKBR3 read in the two visualization modes,
            "synteny" and "dotplot", which shows the read and it's split
            alignments, which traverse chr12, chrX, and chr1.
          </p>
          <a
            className={classes.demoLink}
            href="https://s3.amazonaws.com/jbrowse.org/code/jb2/beta/skbr3_demo/index.html?config=test_data%2Fconfig_demo.json&session=share-9aff10744c4c039bf3a85c6366194046ef0a3d280e7df9cca237bb94775dbac2&password=6363b12220fd4f1eff3115cddc4883f2"
          >
            Demo (dotplot read vs ref)
          </a>
          <a
            className={classes.demoLink}
            href="https://s3.amazonaws.com/jbrowse.org/code/jb2/beta/skbr3_demo/index.html?config=test_data%2Fconfig_demo.json&session=share-2f1a0b366be17d6848bd398e6367ecdc2b62ca3bb71bfdc4b5bd499d7fe2dbb3&password=f515e44eca237e4547955cf8a52ba714"
          >
            Demo (linear read vs ref)
          </a>
        </div>

        <div className={classes.post}>
          <a className={classes.anchorLink} href="#4" name="4">
            Fig 4 - Examples of plugins on the JBrowse 2 platform
          </a>
          <div className={classes.screenshots}>
            <div style={{ padding: 20 }}>
              <ModalImage small="resized.plugin1.png" large="plugin1.png" />
            </div>
            <div style={{ padding: 20 }}>
              <ModalImage small="resized.plugin2.png" large="plugin2.png" />
            </div>
          </div>
          <p>
            The JBrowse 2 platform has been designed with extensibility in mind.
            In this way, we allow plugins to develop new track types, new data
            adapters, and even new &quot;view types&quot; e.g. alternatives to
            the linear genome view. Our circular view and dotplot views are
            examples of this, as are our spreadsheet and breakpoint split view.
          </p>
          <p>
            The example on the left above show a data adapter for the GDC cancer
            genome GraphQL API, fetching variants from their database which are
            colored by variant impact. The example on the right shows data
            fetched from the UCSC REST API for the GeneHancer track, drawn using
            a custom arc renderer. This latter example was documented and
            presented at the BCC2020 training session, and those proceedings are
            available here (
            <a href="https://jbrowse.org/jb2/docs/bcc2020_plugin_development/">
              link
            </a>
            )
          </p>
        </div>
        <div className={classes.post}>
          <a className={classes.anchorLink} href="#5" name="5">
            Fig. 5 - Whole-genome linear CNV overview
          </a>
          <ModalImage small="resized.cnv.png" large="cnv.png" />
          <p>
            While many JBrowse features are designed for in-depth inspection, we
            can also get the &quot;global overview&quot; of a genome CNV
            profiling with a depth-of-coverage plot from read sequencing. This
            shows the read-depth coverage from an SKBR3 PacBio BAM file,
            calculated by mosdepth, in plain BigWig format. The data at this
            scale is displaying binned data (using the zoom levels that are
            built into BigWig files natively) for fast visualization, and each
            bin draws it&apos;s min, mean, and max and three slightly different
            shades of blue here, hence the coloring.
          </p>
          <a
            className={classes.demoLink}
            href="https://s3.amazonaws.com/jbrowse.org/code/jb2/beta/skbr3_demo/index.html?config=test_data%2Fconfig_demo.json&session=share-dd3949994b4456d154a591909dbd22cf4e7e47198e900b94d67e5d9b9208a90f&password=02b00b8b91b4d4fa3c2562f91835eefd"
          >
            Demo
          </a>
        </div>
      </div>
      <div className={classes.post}>
        <a className={classes.anchorLink} href="#8" name="8">
          Fig. 8 - Color and sort by tag
        </a>
        <ModalImage small="resized.colorby.png" large="colorby.png" />
        <p>
          We can also color alignments from BAM or CRAM files by a given tag,
          for example reads tagged with their haplotype information. Sorting is
          also shown here.
        </p>
        <a
          className={classes.demoLink}
          href="https://s3.amazonaws.com/jbrowse.org/code/jb2/beta/skbr3_demo/index.html?config=test_data%2Fvolvox%2Fconfig.json&session=share-88PSZk9jTD&password=GPend"
        >
          Demo
        </a>
      </div>
    </>
  )
}

function Readme() {
  return (
    <div className="readme">
      <p>
        <i>
          These demos present a preview of JBrowse 2 with some live demos. We
          highlight circular, dotplot, and linear comparative views that are new
          to JBrowse 2. These new views aim to help structural variant
          inspection, with a particular focus in these examples on cancer
          applications with the SKBR3 cell line and PacBio long read data.
        </i>
      </p>
      <div>
        <a href="https://github.com/GMOD/jbrowse-components">Github</a>
        <br />
        <a href="https://gitter.im/GMOD/jbrowse2">Gitter chat</a>
        <br />
        <a href="https://jbrowse.org">Main website @ jbrowse.org</a>
        <br />
        <br />
        <p>
          <i>
            Note: We now have a JBrowse 2{' '}
            <a href="https://jbrowse.org/jb2/docs/">documentation portal</a>,
            and JBrowse 2 releases are being posted to our{' '}
            <a href="https://jbrowse.org/jb2/blog">blog</a>
          </i>
        </p>
        <p>
          <i>
            Also note: you can click on any figure here for a zoomed in version
          </i>
        </p>
      </div>
    </div>
  )
}
export default App
