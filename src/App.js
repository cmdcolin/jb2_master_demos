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
          JBrowse 2 ASHG 2020
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
            Fig 1 - Linked supplementary alignments for deletion and inversion
            SV
          </a>
          <div className={classes.screenshots}>
            <div style={{ padding: 20 }}>
              <ModalImage
                small="resized.1.png"
                large="1.png"
                alt="deletion SV"
              />
            </div>
            <div style={{ padding: 20 }}>
              <ModalImage
                small="resized.2.png"
                large="2.png"
                alt="inversion SV"
              />
            </div>
          </div>
          <p>
            This shows long reads which are split-aligned across a deletion and
            an inversion SV. Simple small deletions would use the CIGAR string
            to indicate a deletion, but this deletion event from long PacBio
            reads from the SKBR3 cell line split the alignment into multiple
            records in the BAM file, which are linked by their QNAME, and
            displayed as a single entity in JBrowse 2.
          </p>
          <p>
            The inversion also is from PacBio SKBR3 reads which are split
            aligned into several sections being displayed as a linked entity,
            showing the reads that for example, start aligning on the sense
            strand (red), then flip to the antisense (blue), and then back to
            the sense strand (red)
          </p>
          <a
            className={classes.demoLink}
            href="https://s3.amazonaws.com/jbrowse.org/code/jb2/beta/skbr3_demo/index.html?config=test_data%2Fconfig_demo.json&session=share-4e68d7667f204ee4dfaf01279ee488275686147d4c93c86a80fb2994ad6c43c6&password=c17703bc1fc0d1c7508bc1af8cf42892"
          >
            Demo (deletion)
          </a>
          <a
            className={classes.demoLink}
            href="https://s3.amazonaws.com/jbrowse.org/code/jb2/beta/skbr3_demo/index.html?config=test_data%2Fconfig_demo.json&session=share-09fbcfe05be0f234ff38c2a7da37b5d57485056233e6abd3eb72c61956ad69cf&password=0510843a5e1ac5ef6504e321b6fc7855"
          >
            Demo (inversion)
          </a>
        </div>

        <div className={classes.post}>
          <a className={classes.anchorLink} href="#2" name="2">
            Fig 2 - Breakpoint split view showing a translocation
          </a>
          <ModalImage small="resized.3.png" large="3.png" />
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
            href="https://s3.amazonaws.com/jbrowse.org/code/jb2/beta/skbr3_demo/index.html?config=test_data%2Fconfig_demo.json&session=share-1ac98298d9a92564495c42670e75317b1f68ce8a158a022a0ee11b4dde5eecd6&password=7551ad20dd2a6e99794cebff0d2d2daf"
          >
            Demo
          </a>
        </div>
        <div className={classes.post}>
          <a className={classes.anchorLink} href="#3" name="3">
            Fig 3 - SV inspector with spreadsheet and circos overview
          </a>
          <ModalImage small="resized.4.png" large="4.png" />
          <p></p>
          <a
            className={classes.demoLink}
            href="https://s3.amazonaws.com/jbrowse.org/code/jb2/beta/skbr3_demo/index.html?config=test_data%2Fconfig_demo.json&session=share-2669c214ec21890a19b4eeacaafb8e416f471213a60ee3f21f65ea4f36297029&password=431a9e01c3816db57b2eb12e3b5e13b5"
          >
            Demo
          </a>
        </div>

        <div className={classes.post}>
          <a className={classes.anchorLink} href="#5" name="5">
            Fig 5 - Dotplot/synteny of long read vs reference
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
            href="https://s3.amazonaws.com/jbrowse.org/code/jb2/beta/skbr3_demo/index.html?config=test_data%2Fconfig_demo.json&session=share-a787a0d9f50469313a9ec1513bf2f2e613a7af90f0306053d1ae36ced4b76b21&password=fe74332a03ebc51780d8c3fb0b8f6ac6"
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
          <a className={classes.anchorLink} href="#6" name="6">
            Fig 6 - Examples of plugins on the JBrowse 2 platform
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
            <a
              className={classes.anchorLink}
              href="https://jbrowse.org/jb2/docs/bcc2020_plugin_development/"
            >
              link
            </a>
            )
          </p>
        </div>
        <div className={classes.post}>
          <a className={classes.anchorLink} href="#7" name="7">
            Bonus fig - Whole-genome linear CNV overview (not on poster)
          </a>
          <ModalImage small="resized.cnv.png" large="cnv.png" />
          <p>
            While many JBrowse features are designed for in-depth inspection, we
            can also get the "global overview" of a genome CNV profiling with a
            simple depth converage. This is simply the read-depth coverage from
            mosdepth from the SKBR3 PacBio BAM file. The data at this scale is
            binned for fast visualization, and each bin draws it's min, mean,
            and max and three slightly different shades of blue here, hence the
            coloring.
          </p>
          <a
            className={classes.demoLink}
            href="https://s3.amazonaws.com/jbrowse.org/code/jb2/beta/skbr3_demo/index.html?config=test_data%2Fconfig_demo.json&session=share-dd3949994b4456d154a591909dbd22cf4e7e47198e900b94d67e5d9b9208a90f&password=02b00b8b91b4d4fa3c2562f91835eefd"
          >
            Demo
          </a>
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
          These demos present a preview of JBrowse 2, as a companion to our ASHG
          2020 poster. We highlight circular, dotplot, and linear comparative
          views that are new to JBrowse 2. These new views aim to help
          structural variant inspection, with a particular focus in these
          examples on cancer applications with the SKBR3 cell line and PacBio
          long read data.
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
