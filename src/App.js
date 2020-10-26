import React from 'react'
import './style.css'
import icon from './icon.ico'
import ModalImage from 'react-modal-image'

function App() {
  return (
    <div>
      <span className="topSpan">
        <h2 className="jbrowseHeader">JBrowse ASHG2020 demos</h2>
        <img alt="logo" src={icon} className="icon" align="right" />
      </span>
      <hr />
      <Readme />

      <div id="parentDiv">
        <div className="post">
          <a href="#1" name="1">
            <h1>
              Fig 1 - Linked supplementary alignments for deletion and inversion
              SV
            </h1>
          </a>
          <div style={{ display: 'flex' }}>
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
            className="demo"
            href="https://s3.amazonaws.com/jbrowse.org/code/jb2/beta/skbr3_demo/index.html?config=test_data%2Fconfig_demo.json&session=share-4e68d7667f204ee4dfaf01279ee488275686147d4c93c86a80fb2994ad6c43c6&password=c17703bc1fc0d1c7508bc1af8cf42892"
          >
            Demo (deletion)
          </a>
          <a
            className="demo"
            href="https://s3.amazonaws.com/jbrowse.org/code/jb2/beta/skbr3_demo/index.html?config=test_data%2Fconfig_demo.json&session=share-09fbcfe05be0f234ff38c2a7da37b5d57485056233e6abd3eb72c61956ad69cf&password=0510843a5e1ac5ef6504e321b6fc7855"
          >
            Demo (inversion)
          </a>
        </div>

        <div className="post">
          <a href="#2" name="2">
            <h1>Fig 2 - Breakpoint split view showing a translocation</h1>
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
            className="demo"
            href="https://s3.amazonaws.com/jbrowse.org/code/jb2/beta/skbr3_demo/index.html?config=test_data%2Fconfig_demo.json&session=share-1ac98298d9a92564495c42670e75317b1f68ce8a158a022a0ee11b4dde5eecd6&password=7551ad20dd2a6e99794cebff0d2d2daf"
          >
            Demo
          </a>
        </div>
        <div className="post">
          <a href="#3" name="3">
            <h1>Fig 3 - SV inspector with spreadsheet and circos overview</h1>
          </a>
          <ModalImage small="resized.4.png" large="4.png" />
          <p></p>
          <a
            className="demo"
            href="https://s3.amazonaws.com/jbrowse.org/code/jb2/beta/skbr3_demo/index.html?config=test_data%2Fconfig_demo.json&session=share-2669c214ec21890a19b4eeacaafb8e416f471213a60ee3f21f65ea4f36297029&password=431a9e01c3816db57b2eb12e3b5e13b5"
          >
            Demo
          </a>
        </div>

        <div className="post">
          <a href="#5" name="5">
            <h1>Fig 5 - Dotplot/synteny of long read vs reference</h1>
          </a>
          <div style={{ display: 'flex' }}>
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
            "synteny" and "dotplot", which is show the read and it's split
            alignments, which traverse chr12, chrX, and chr1.
          </p>
          <a
            className="demo"
            href="https://s3.amazonaws.com/jbrowse.org/code/jb2/alpha/longread_demo/index.html?config=test_data/config_longread.json"
          >
            Demo
          </a>
        </div>
      </div>

      <div className="post">
        <a href="#6" name="6">
          <h1>
            Fig 6 - Whole-genome linear CNV overview (bonus, not in poster)
          </h1>
        </a>
        <ModalImage small="resized.cnv.png" large="cnv.png" />
        <p>
          While many JBrowse features are designed for in-depth inspection, we
          can also get the "global overview" of a genome CNV profiling with a
          simple depth converage. This is simply the read-depth coverage from
          mosdepth from the SKBR3 PacBio BAM file. The data at this scale is
          binned for fast visualization, and each bin draws it's min, mean, and
          max and three slightly different shades of blue here, hence the
          coloring.
        </p>
        <a
          className="demo"
          href="https://s3.amazonaws.com/jbrowse.org/code/jb2/beta/skbr3_demo/index.html?config=test_data%2Fconfig_demo.json&session=share-dd3949994b4456d154a591909dbd22cf4e7e47198e900b94d67e5d9b9208a90f&password=02b00b8b91b4d4fa3c2562f91835eefd"
        >
          Demo
        </a>
      </div>
    </div>
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
          structural variant inspection and synteny visualization.
        </i>
      </p>
      <div>
        <a href="https://github.com/GMOD/jbrowse-components">Github</a>
        <br />
        <a href="https://gitter.im/GMOD/jbrowse2">Gitter chat</a>
      </div>
    </div>
  )
}
export default App
