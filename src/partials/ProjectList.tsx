import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        我们的 <GradientText>产品</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="剪切助手"
        description="剪切助手，轻松管理您的文本复制粘贴！简化您的工作流程，通过一键操作，快速访问最近复制的文本内容，提高工作效率，让剪切板管理变得轻松便捷！"
        link="/"
        img={{
          src: 'https://jianqiezhushou.com/_astro/logo.73aa3e83.png',
          alt: '剪切助手',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Vue3</Tags>
            <Tags color={ColorTags.LIME}>Electron</Tags>
            <Tags color={ColorTags.SKY}>TypeScript</Tags>
          </>
        }
      />
      <Project
        name="编程导航"
        description="编程导航,做您编程路上的导航员,最专业的程序员导航,一站式编程资源搜索,发现优质编程学习资源,提高编程学习效率,公众号编程导航"
        link="https://www.code-nav.cn"
        img={{
          src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXgAAAF4CAYAAABeneKmAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABW4SURBVHgB7d1ByGVnfcfxZ9qCXbS6sRBQSzGLYqeL6KKtUgwFIxHspkoj2SUQtwnUXTHIuFWY7Iop2pWgYDYNJHTcRKi23ZiF1lVc1Liym2bnapp/3hwzJvNO7nvvuef8zv98PhBcOcPc997ve+45z/N/rt138/btAUA7vzMAaEngAZoSeICmBB6gKYEHaErgAZoSeICmBB6gKYEHaErgAZoSeICmBB6gKYEHaErgAZoSeICmBB6gKYEHaErgAZoSeICmBB6gKYEHaErgAZoSeICmBB6gKYEHaErgAZoSeICmBB6gKYEHaErgAZoSeICmBB6gKYEHaErgAZoSeICmBB6gKYEHaErgAZoSeICmBB6gKYEHaErgAZoSeICmBB6gKYEHaErgAZoSeICmBB6gKYEHaErgAZoSeICmBB6gKYEHaErgAZoSeICmBB6gKYEHaErgAZoSeICmBB6gKYEHaErgAZoSeICmBB6gKYEHaErgAZoSeICmBB6gKYEHaErgAZoSeICmBB6gKYEHaErgAZoSeICmBB6gKYEHaErgAZoSeICmBB6gKYEHaErgAZoSeICmBB6gKYEHaErgAZoSeICmBB6gKYEHaErgAZoSeICmBB6gKYEHaErgAZoSeICmBB6gKYEHaErgAZoSeICmBB6gKYEHaErgAZoSeICmfm8Q70PvHePvPzLGw/eP8ed/NM7mJ78a49kfj/Hdn41Ne+KBMR75szGun/m1+tEvL16vX7w2INK1+27evj2IVbH60l+N8d73jMU8/dLr4Xp5bNI//OXF67Wkr/3HGF//zwFx3KIJdvOhMW48uGzcy9K/UOZS33SWjnupv/PGJwfEEfhQFfe6zbCGivsnPjA25/r7x2qe+OjFzwySCHyYiuv3Prde3Lfsfb8/VlU/s1uPbvPbDz0JfJAp7p/44FjdT/93bM4Lr4zx2q/HquoheP0MRZ4EAh+i7h9XGM65SuZQ9cBwiytDKu5fC3jYWT/D7z968TOFNQl8gLS416qQrapliwkrWqafqcizJoFfWVIIth73ScqyRZFnbQK/InE/H5EHgV/N9DBO3M8nLfLXA27BsS8CvwJxX05S5J8TeRYm8AurmTIpy+i6x32SEvn6mVfka6YQLEHgF1Rxf+bT4r6GpMh/67MX7wU4N4FfSA0Nq7gn2FvcJ0lDweq9UO8JOKff/YOHv/KVwVnVhMN//OsRYa9xn/zw1TGuXcvYLfw3f3LxvzV2GM7BFfyZrTG+9jJ7j/sk6Uq+3hv1HoFzEPgzEvdcIs8eONHpTGo+eI2QTSDudze9JglxnS4EHBzCnFzBn0HNBRf3bUi7kjdTnjkJ/IxqCdyaB3W8nbgfJiny9d6pZZTGDTMHgZ9J2kEd4n41SZGvjVBmyjMHgZ/BFPeEcb9F3I+TFPmkcRZsl8CfqD6AdbiDuPcg8nQi8CdIGwUr7vNIirxxw5xC4I8k7r2JPB0I/BHEfR9Enq0T+CtKO1BZ3M8rLfL13jNTnkMJ/BV8/ANZy9fEfRlJkZ9myos8hxD4A9X87uc+L+57lRb5upI3U553I/AHmA7qSCHu60iKfKn3pMhzLwL/LmoQlbgzSYy8SZRcRuDvIWncbxH3DGmRN26Yywj8JcSdexF5tkDg70LcOYTIk86BH2+TNO63iHu2pENDSkX+fe8Z4+kfDHAFfydx5xhpV/J12IyDQygCP/JmuRdx35a0yNd7+dajZsrv3e4DP8X9Ex8cMcR9m9IiP40bFvn92nXg02a5F3HftsTIJ81OYlm7DXzidD5x7yEt8iZR7tcuAy/unJvIk2B3gRd3liLyrG1XgU+8HynuvaVG3rjhfdhN4BNXFIj7PiRG3kz5fdhF4GukqrizprTITweHPHz/oLFr9928fXs0ljbLvYj7fiXOi3ny38b47s/G5tU3k9rF+/CHl70N+4vXxnj2x6//9/KI0zrwTzwwxo0HRxRxJzHyad8wrurGJy/ivpbXfj3Gn/7TiNN22FjaRMgi7pS0AWVl+qxsLfJ1q+mZh9a/1ZS6W7hl4MWddCJ/umnMSMJO9NTXrF3gxZ2tEPnjJa3pf+rWGN/57xGp1Sqaug8n7mxJ4r3v+gzVZymVuB+uzRV82iz3Iu4cIvFKvh5Y1i2QCliSpP0s6XEvm7+Crx+0uLN1iVfy9Zn61mdzHiDWg1Rxv5pNL5NMeshyJ3HP9vEPjPHc58fJfvjqGJ/73phV4hLKn/zq4t9ZSwHXkrKfpV6Dx56/+NlvwWav4Kf7cOLOVX3h+pjFOa7gEq/kp9sia93zrl94KXGvX3RbiXvZ5BV86lS8peJe31we+cjFLJH674/f+9bX1noT/s9rY7z6+n8vvDLGj355sdOOC/We+a/HxsnqNf2Lb42zSbySr39zBW7J91PKqrgp7vVtZks2F/g9x71uLdSb/arHC774eui/8eOL2O9dXQnW1/1TLbG9f++RT3m2ttW4l00Ffq9xr39vvdlPPTe2Qv/0D/Z7RT8d0XjqQ7p6/T717WXuSe8x8im7U0v9Gx9/fptxL5u5B7/2fcDLnDvuNU+nojTHoeD1gak/q/7MParXcI4VGHUPdqkHjon35M95oTUtnEiJ+1av3CebCPxe415XbjUsbc5lYfVn1Z+ZdlW4hLn+zUsHNzXydbEw50z56c9MWDixxvOGc4gPfN13TpvlXpaI+zkfLiV+9T+nupc7xwVCrZxZ40OfGPlppvwckU+6/dol7iU68PUwrNYr7y3udQtliZUD9Xfs5XbNVq/e75Qa+brqPuXBddJRmp3iXmIDn3hQR1nigeqSy8Lq7+p+CHN9C5zj31j33tf+4KfObT92dVLS7tRucS+Rga8f+h7jXmrI05Jv9mnUQ2df/NiYRZ3akyA58ldZDFC/EFJGIXSMe4kMfOIku6XWua+xeqA+lHOs0klUV+51hNup6oP/4s9HjNTIHxrspIu4rnEvcYGf62HYnJbaoTrXleYxuj5wnet2V+L4idR78o8ccKvmSyHvt2nOTte9IXGBn2OX4ZyWivtcV5rHmmuNeJJ6Ted4P9WHP/VQ6sTIH/It9HrAUsjucS9xgU8aHrbk4LCEWySPhP1yPdVcFwupcZ+kRT5tAODdJEzIXEJc4FOuIpeeCpmwcy/hqmpOc80x2cLc76TIp38T3EvcS6sj++ayxsjfD/3hWN0WrrwOtfWNTcdIffCaZJrhv4e4l3aHbp9qrXnuCQ+WO62H77Cx6RiJx/+lqFttNQV0T1zB32HNwzoSvtZ2echaD6vn+GVV0ze3+ADOlfw77THuReDf5CSmPurA6Dk8+/LYLJF/y17jXgR+ZMQ94Z5gh/uSdeU+x4qkunLf0tFsdyPy+4572X3gU67cE24FdFgP3Hlj0zH2HPn6d+857mXXgU+6LZNwqMDWA7+HjU3H2GPk3XK9sNvA14c46Q3w04DA1yHdW+bq/XL1b9rL0kBxf8tuA58Ws+8EXDFu+VDuWgFUw9pOVRHsejj5FjZsnSrtwm1tHrKGqLCs+VBvq0sCJ5+5f56lkS9s/HW4l//bwRX8Xr6lHGq3gU/ctbnmfdItLwkse93YdBVdR0LfqcZt7OHfeajdBr7eBAnzX+5UV/BrXMXX1fuWlwTucSzBVdVrtJfw1Uz67qeUHWrXt2ieeShvwNZTt5b9mll/19M/GJu2l6mRx6pvq4mH6JxLPY9JOQZwbbsO/HQqfNJv+zceEi14m6D+ri1ftdaD1TmuTNf69nRu9d7+ZsixeEuqf3ddye/d7h+yTr/tkyJfZ38ucS+4/o6Uc0aP9YXrYxYdV5jUezrtvb2k+sW/p28ud2MVzXjrg5B0lXPuzSkd1grb2HS5vcd9UnOJnnhg7JbAvyk18nV/fM578tM99w5rhW1surt6D3/Tg8bfuPHgflfWCPwdEh9G1S2UT317jBd/Pk5W95jrz9r6bZky1xm2dfU+x2ubpBYPdDq8ZQ43H9rnLzyBf5taTpYW+YrQY/96cRLNi0fswJ1Osel0wPBch4TXa9Npc0y9d9OW/yZI/Ia+BCc63UXdt6tdf2mbXqaVHtNI3Olgi/pveuNWrCriNbys5tvUCISOu/tsbHqnek3mmoXfUX1O6tvNY8+P3YgLfEUpYW36dH83MQAV8Fr1sYfZIndjY9M7VdzneiZxqoTBeZepbzf1Wu1lumbcLZqkIWD1gZlrEw3zcfX+22qVSErcy78fsJ9gzW+V9VrtZWVNXOBrJkrSLYVnPm22RZLa2DTH1Xvd6upw9V5XpLVKJMk/HzDX6BsrP+ivyKftYj+HuMBX3L8WdmVVO+L28GbYgi9+bMyiw0qiWilT95STfP3AndF1IbfmrZx6ZrWHmTWRq2jqw5e08WQvb4Z0lka+JXEEQUX70D0FdSFXDzvX/La+hzEOscsk6yzFpMjbGbg+G5suJL4X67P69EtX+r9cLP9deUVL90Fs0evgK/JJA6D2upY2gbEEFxJnJ9XejGMPt67P99rTTGtV1lwP7tPEb3Sq3/BJy65Efh1GAmfGvfZbPHlrnCThlmzXFXPxga97dH/3vazI722+doK6yprDlvcO1HsuaQRBxb12R89xH/3LL62/qumrD/ZbTLGJUQXTA5mkZW2JIw26srHp4r021y+5OdTr+PiMD0nrz5nrl8WxOi6m2MwsmnpDpc1SqW3hXe/dJdn7xqa0EQTn+izWn7f2/fhuK2s2NWwsMfJ1707kz2eat3OqehC4xav3pBEE5dyfwfqWtfYehU63YDc3TTI18kYanMdcV67PHrC7Mk29p/YU90ldxa+9eq7LyppNjgue3mhGGvQ2Tc08Vb1ftnbeao1kqPdUiuke+VIXVgnP3DpcuG12Hnxi5I00mNdeNzbVLYJ/+dsRY+m4T3/n48+v//ne+sqaTR/4MecyrTkYaTCfvW5sSnzIV5+xn6ywTLn+zrXnUm39M735E53qTbD2k/c7GWkwjz1evSe+d566tU7cJ/XAde2HrlteWdPiyL568v7Uibvp5mS362nqdat70Keqb3Y/+uXYhMRdqvWZStgYVlfxa290rNtmX9rgQ9c2Z7LWGzHxSl7kr+4z988Tuhc2tDQyLe61ZyBl12/C5MmyxX0vrQ7drq9ySZtZjDQ4zt42Nt18KGsEQb1uabe2EiZPlrp1uKVDzVsFvtQbM+mDbaTB1extLEH9MksaQZAY90nC5MlSh6xs5Rlbu8CXtMgbaXC4PU2NTNulmhz3ScLkycTnJZe5dt/N27dHU3XlnDTDI+0XD+sR9+NVYL//6PqBrW8UtYQ0Wcsr+El9nUu6kjPSgJI2gqA+I1taTpowebLULuv026+tA1/Sjv4z0mDf3jgoO2gEQX02jj2NaU0JkydL3SF44oERq33gSx0mkHRgiJEG+zQtnU3xxmlMG4z7JGHyZLnxYO5F2y4Cn3YqlJEG+5O2L2Ia87F1CZMnS+rneReBL1PkU5bOGWmwH2k/68RBfadImDxZv7gT78fvJvBljal499Lt9BjeKW1JXbe4l+lzveUD1c+l9TLJy6RdUdXX5Ye+PWjo1qM5u1QTD8uZW90Lr41j19+/7HOu+gw/HnZudNll4Eta5NMGpnG6GkGQskt1D3HnnXZ1i+ZOaW94Iw16SRpBIO77tdvAl3rDJ5waMzHSoIekXarTyUjivk+7DnxJOxWqwpC8cYJ7S4v7WqcxkWH3gS/1AUgYRTqpjRNGGmxP2giCJ2+J+94J/Jtqs0TSQ87azm6363akjSCo9/KLrwx2TuDvkLaS5bnPifwWpI0gqN2dKacxsS6Bf5v6YKSM9DXSIF/aCIJ67ybMZyGDwN9F0tx2Iw1ypf1stjTTnWUI/CXSIm+kQZa0EQTizt0I/D0kRb4e4tXtGjKIO1sg8O+iPjgpQ4xqzkZtf2dd9TNImS/z7MvizuUE/gBJp0LV9ne7XdeTNIKg3pNPvzTgUgJ/oIp8wsECpTbTiPzyknap1hr3LZ/GxDIE/gpqt2vKqVBGGiwrKe5vHLVn8igHEPgrSDv6z0iDZSSNIEibnUQ2gb+i+mAlHBE2+eqDdrueU9IIgrTpp+QT+CMkzdeu9djP2Qh1FkkjCMx05xgCf6S0yNvtOq+kEQTizrEE/gRJHzwjDeaT9FqKO6cQ+BMlnVJvpMHp6rX7ZsiAt+nADnHnWAI/g6TIG2lwmnrtEnapijtzEPiZJC1fM9LgOPWa1WuXwFF7zEHgZ1QfyDpsIYGRBleTNILgKUftMROBn1nSqVBGGhwmaZdqvXecxsRcBP4M6gOaciVvpMG91WuTEvca+yvuzEngz6SOTUuZJW+kwd3Va1KvTQIz3TkHgT+jpANDjDT4bbVS5qviTnMCf2YpkTfS4C1Ju1TFnXMS+AXUBzjhpHsjDcSdfRH4hdRD14RTofY80iDp317vBXHn3AR+QSlH/+1xpEHSCIJ6DziNiSUI/MK+/FLGgSF7G2nwTMhB2W+cxiTuLETgF5Z0KtReRhrc+OQYD98/VjeNs4ClCPwKpsgnDJLqPtKg/m1PfHSsLmkgHfsh8CtJmhbYdaRByggCcWctAr+ipMMcuo00SBlB4MAO1iTwK0sKQJeRBnW/PWEEgbizNoEPkBSCrY80qJUyzwQ8OBZ3Egh8iArB48+vf592yyMNUtb318+wfpbiztoEPkjKqVAVyC0un6x77mv/YpoenjuwgwQCH6bC8NjzY3UJm4Ku6uEPj9U96TQmggh8oB++mnMqFIern9mLrwyIIfCh1j7674UNhmrNK2dH7ZFI4INVMB5b4WFd/X0pB5VcRUV26ecX0z13cSfRtftu3r49iFYPDmtuTK1Rr3vj51olUrGqq+AK5VZXgNRrVQ9bz7mef3qd6nbMd35mhyq5BB6gKbdoAJoSeICmBB6gKYEHaErgAZoSeICmBB6gKYEHaErgAZoSeICmBB6gKYEHaErgAZoSeICmBB6gKYEHaErgAZoSeICmBB6gKYEHaErgAZoSeICmBB6gKYEHaErgAZoSeICmBB6gKYEHaErgAZoSeICmBB6gKYEHaErgAZoSeICmBB6gKYEHaErgAZoSeICmBB6gKYEHaErgAZoSeICmBB6gKYEHaErgAZoSeICmBB6gKYEHaErgAZoSeICmBB6gKYEHaErgAZoSeICmBB6gKYEHaErgAZoSeICmBB6gKYEHaErgAZoSeICmBB6gKYEHaErgAZoSeICmBB6gKYEHaErgAZoSeICmBB6gKYEHaErgAZoSeICmBB6gKYEHaErgAZoSeICmBB6gKYEHaErgAZoSeICmBB6gKYEHaErgAZoSeICmBB6gKYEHaErgAZoSeICmBB6gKYEHaErgAZoSeICmBB6gKYEHaErgAZoSeICmBB6gKYEHaErgAZoSeICmBB6gKYEHaErgAZr6fw0h5oIZzj7WAAAAAElFTkSuQmCC',
          alt: '编程导航',
        }}
        category={
          <>
            <Tags color={ColorTags.VIOLET}>React.js</Tags>
            <Tags color={ColorTags.EMERALD}>TypeScript</Tags>
          </>
        }
      />
      <Project
        name="代码小抄"
        description="代码小抄,在线代码分享,简单易用的代码分享工具"
        link="https://www.codecopy.cn"
        img={{
          src: 'data:image/png;base64,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',
          alt: '代码小抄',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>React.js</Tags>
            <Tags color={ColorTags.ROSE}>TypeScript</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
