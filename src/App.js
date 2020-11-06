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
            href="https://s3.amazonaws.com/jbrowse.org/code/jb2/@jbrowse/web@1.0.0/index.html?config=test_data%2Fconfig_demo.json&session=share-58nID8k24H&password=D2pSu"
          >
            Demo (dotplot read vs ref)
          </a>
          <a
            className={classes.demoLink}
            href="https://s3.amazonaws.com/jbrowse.org/code/jb2/@jbrowse/web@1.0.0/index.html?config=test_data%2Fconfig_demo.json&session=share-VOySyliHTD&password=SMiSS"
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
