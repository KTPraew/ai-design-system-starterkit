"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Upload, Download, Check, Loader2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Label } from "@/components/ui/label"
import { DocsLayoutWrapper } from '@/components/docs-layout-wrapper'

export default function ProgressPage() {
  const [progress1, setProgress1] = useState(0)
  const [progress2, setProgress2] = useState(0)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [isUploading, setIsUploading] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)

  // Animated progress demo
  useEffect(() => {
    const timer = setTimeout(() => {
      if (progress1 < 100) {
        setProgress1(progress1 + 1)
      }
    }, 50)
    return () => clearTimeout(timer)
  }, [progress1])

  // Simulated upload
  const startUpload = () => {
    setIsUploading(true)
    setUploadProgress(0)
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsUploading(false)
          return 100
        }
        return prev + 2
      })
    }, 100)
  }

  return (
    <DocsLayoutWrapper>
      <div className="space-y-8">
        <div className="flex items-center gap-4 mb-4">
          <h1 className="text-4xl font-bold">Progress</h1>
          <Badge>Feedback</Badge>
        </div>
        <p className="text-lg text-muted-foreground">
          Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.
        </p>
      </div>

      <div className="space-y-8">
        {/* Basic Progress */}
        <Card>
          <CardHeader>
            <CardTitle>Basic Progress</CardTitle>
            <CardDescription>Simple progress bars with different values</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>0%</span>
              </div>
              <Progress value={0} />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>25%</span>
              </div>
              <Progress value={25} />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>50%</span>
              </div>
              <Progress value={50} />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>75%</span>
              </div>
              <Progress value={75} />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>100%</span>
              </div>
              <Progress value={100} />
            </div>
          </CardContent>
        </Card>

        {/* Animated Progress */}
        <Card>
          <CardHeader>
            <CardTitle>Animated Progress</CardTitle>
            <CardDescription>Progress bar with smooth animation</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">Loading...</span>
                <span className="text-muted-foreground">{progress1}%</span>
              </div>
              <Progress value={progress1} />
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setProgress1(0)}
            >
              Reset
            </Button>
          </CardContent>
        </Card>

        {/* Sizes */}
        <Card>
          <CardHeader>
            <CardTitle>Sizes</CardTitle>
            <CardDescription>Progress bars with different heights</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label>Extra Small (h-1)</Label>
              <Progress value={66} className="h-1" />
            </div>

            <div className="space-y-2">
              <Label>Small (h-2, default)</Label>
              <Progress value={66} className="h-2" />
            </div>

            <div className="space-y-2">
              <Label>Medium (h-3)</Label>
              <Progress value={66} className="h-3" />
            </div>

            <div className="space-y-2">
              <Label>Large (h-4)</Label>
              <Progress value={66} className="h-4" />
            </div>

            <div className="space-y-2">
              <Label>Extra Large (h-6)</Label>
              <Progress value={66} className="h-6" />
            </div>
          </CardContent>
        </Card>

        {/* Colors */}
        <Card>
          <CardHeader>
            <CardTitle>Colors</CardTitle>
            <CardDescription>Progress bars with different color variants</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label>Primary (Default)</Label>
              <Progress value={60} />
            </div>

            <div className="space-y-2">
              <Label>Success (Green)</Label>
              <Progress value={60} className="[&>div]:bg-green-500" />
            </div>

            <div className="space-y-2">
              <Label>Warning (Yellow)</Label>
              <Progress value={60} className="[&>div]:bg-yellow-500" />
            </div>

            <div className="space-y-2">
              <Label>Danger (Red)</Label>
              <Progress value={60} className="[&>div]:bg-red-500" />
            </div>

            <div className="space-y-2">
              <Label>Info (Blue)</Label>
              <Progress value={60} className="[&>div]:bg-blue-500" />
            </div>

            <div className="space-y-2">
              <Label>Purple</Label>
              <Progress value={60} className="[&>div]:bg-purple-500" />
            </div>
          </CardContent>
        </Card>

        {/* With Labels */}
        <Card>
          <CardHeader>
            <CardTitle>With Labels</CardTitle>
            <CardDescription>Progress bars with descriptive labels</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">Profile Completion</span>
                <span className="text-muted-foreground">45%</span>
              </div>
              <Progress value={45} />
              <p className="text-xs text-muted-foreground">
                Complete your profile to unlock all features
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">Storage Used</span>
                <span className="text-muted-foreground">7.2 GB / 10 GB</span>
              </div>
              <Progress value={72} className="[&>div]:bg-orange-500" />
              <p className="text-xs text-muted-foreground">
                2.8 GB remaining
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">Project Progress</span>
                <span className="text-muted-foreground">8 / 12 tasks</span>
              </div>
              <Progress value={66.67} className="[&>div]:bg-green-500" />
              <p className="text-xs text-muted-foreground">
                4 tasks remaining
              </p>
            </div>
          </CardContent>
        </Card>

        {/* File Upload Simulation */}
        <Card>
          <CardHeader>
            <CardTitle>File Upload Simulation</CardTitle>
            <CardDescription>Simulated file upload with progress tracking</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border-2 border-dashed rounded-lg p-8 text-center">
              <Upload className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <p className="text-sm text-muted-foreground mb-4">
                Click the button below to simulate a file upload
              </p>
              <Button
                onClick={startUpload}
                disabled={isUploading}
              >
                {isUploading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Uploading...
                  </>
                ) : uploadProgress === 100 ? (
                  <>
                    <Check className="mr-2 h-4 w-4" />
                    Upload Complete
                  </>
                ) : (
                  <>
                    <Upload className="mr-2 h-4 w-4" />
                    Start Upload
                  </>
                )}
              </Button>
            </div>

            {(isUploading || uploadProgress > 0) && (
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">document.pdf</span>
                  <span className="text-muted-foreground">{uploadProgress}%</span>
                </div>
                <Progress value={uploadProgress} />
                {uploadProgress === 100 && (
                  <p className="text-xs text-green-600 flex items-center gap-1">
                    <Check className="h-3 w-3" />
                    Upload completed successfully
                  </p>
                )}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Multi-Step Progress */}
        <Card>
          <CardHeader>
            <CardTitle>Multi-Step Progress</CardTitle>
            <CardDescription>Progress indicator for multi-step processes</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                {[1, 2, 3, 4].map((step) => (
                  <div key={step} className="flex flex-col items-center gap-2">
                    <div
                      className={`h-10 w-10 rounded-full flex items-center justify-center font-medium ${
                        step < currentStep
                          ? "bg-green-500 text-white"
                          : step === currentStep
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {step < currentStep ? <Check className="h-5 w-5" /> : step}
                    </div>
                    <span className="text-xs text-muted-foreground">
                      Step {step}
                    </span>
                  </div>
                ))}
              </div>

              <Progress value={(currentStep - 1) * 33.33} />

              <div className="flex gap-2">
                <Button
                  variant="outline"
                  onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                  disabled={currentStep === 1}
                >
                  Previous
                </Button>
                <Button
                  onClick={() => setCurrentStep(Math.min(4, currentStep + 1))}
                  disabled={currentStep === 4}
                  className="flex-1"
                >
                  {currentStep === 4 ? "Complete" : "Next"}
                </Button>
              </div>
            </div>

            <div className="p-4 border rounded-lg bg-muted/30">
              <p className="text-sm">
                <strong>Current Step:</strong> {currentStep} of 4
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Progress: {Math.round(((currentStep - 1) / 3) * 100)}%
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Loading States */}
        <Card>
          <CardHeader>
            <CardTitle>Loading States</CardTitle>
            <CardDescription>Different loading and indeterminate states</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label>Indeterminate Loading</Label>
              <div className="relative h-2 w-full overflow-hidden rounded-full bg-primary/20">
                <div className="h-full w-1/3 animate-[shimmer_2s_infinite] bg-primary" />
              </div>
              <p className="text-xs text-muted-foreground">
                Use for unknown duration tasks
              </p>
            </div>

            <div className="space-y-2">
              <Label>Pulsing Progress</Label>
              <Progress value={50} className="animate-pulse" />
              <p className="text-xs text-muted-foreground">
                Indicates active processing
              </p>
            </div>

            <div className="space-y-2">
              <Label>Gradient Progress</Label>
              <Progress
                value={70}
                className="[&>div]:bg-gradient-to-r [&>div]:from-blue-500 [&>div]:to-purple-500"
              />
              <p className="text-xs text-muted-foreground">
                Custom gradient styling
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Stacked Progress */}
        <Card>
          <CardHeader>
            <CardTitle>Stacked Progress</CardTitle>
            <CardDescription>Multiple progress indicators stacked</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">CPU Usage</span>
                <span className="text-muted-foreground">45%</span>
              </div>
              <Progress value={45} className="[&>div]:bg-blue-500" />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">Memory Usage</span>
                <span className="text-muted-foreground">72%</span>
              </div>
              <Progress value={72} className="[&>div]:bg-orange-500" />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">Disk Usage</span>
                <span className="text-muted-foreground">88%</span>
              </div>
              <Progress value={88} className="[&>div]:bg-red-500" />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">Network Usage</span>
                <span className="text-muted-foreground">30%</span>
              </div>
              <Progress value={30} className="[&>div]:bg-green-500" />
            </div>
          </CardContent>
        </Card>

        {/* Rounded Corners */}
        <Card>
          <CardHeader>
            <CardTitle>Corner Styles</CardTitle>
            <CardDescription>Progress bars with different corner radius</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label>Rounded (Default)</Label>
              <Progress value={66} />
            </div>

            <div className="space-y-2">
              <Label>Square</Label>
              <Progress value={66} className="rounded-none" />
            </div>

            <div className="space-y-2">
              <Label>Slightly Rounded</Label>
              <Progress value={66} className="rounded-sm" />
            </div>

            <div className="space-y-2">
              <Label>More Rounded</Label>
              <Progress value={66} className="rounded-lg" />
            </div>
          </CardContent>
        </Card>

        {/* Interactive Progress */}
        <Card>
          <CardHeader>
            <CardTitle>Interactive Progress</CardTitle>
            <CardDescription>Control progress with buttons</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">Adjustable Progress</span>
                <span className="text-muted-foreground">{progress2}%</span>
              </div>
              <Progress value={progress2} />
            </div>

            <div className="flex flex-wrap gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setProgress2(Math.max(0, progress2 - 10))}
              >
                -10%
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setProgress2(Math.max(0, progress2 - 1))}
              >
                -1%
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setProgress2(Math.min(100, progress2 + 1))}
              >
                +1%
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setProgress2(Math.min(100, progress2 + 10))}
              >
                +10%
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setProgress2(0)}
              >
                Reset
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setProgress2(100)}
              >
                Complete
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Usage */}
        <Card>
          <CardHeader>
            <CardTitle>Usage</CardTitle>
            <CardDescription>How to use the Progress component</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Import</h3>
                <pre className="bg-secondary p-4 rounded-lg overflow-x-auto">
                  <code>{`import { Progress } from "@/components/ui/progress"`}</code>
                </pre>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Basic Usage</h3>
                <pre className="bg-secondary p-4 rounded-lg overflow-x-auto">
                  <code>{`<Progress value={60} />`}</code>
                </pre>
              </div>

              <div>
                <h3 className="font-semibold mb-2">With Label</h3>
                <pre className="bg-secondary p-4 rounded-lg overflow-x-auto">
                  <code>{`<div className="space-y-2">
  <div className="flex items-center justify-between text-sm">
    <span>Loading...</span>
    <span>75%</span>
  </div>
  <Progress value={75} />
</div>`}</code>
                </pre>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Custom Size</h3>
                <pre className="bg-secondary p-4 rounded-lg overflow-x-auto">
                  <code>{`<Progress value={60} className="h-4" />`}</code>
                </pre>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Custom Color</h3>
                <pre className="bg-secondary p-4 rounded-lg overflow-x-auto">
                  <code>{`<Progress
  value={60}
  className="[&>div]:bg-green-500"
/>`}</code>
                </pre>
              </div>

              <div>
                <h3 className="font-semibold mb-2">With State</h3>
                <pre className="bg-secondary p-4 rounded-lg overflow-x-auto">
                  <code>{`const [progress, setProgress] = useState(0)

useEffect(() => {
  const timer = setTimeout(() => {
    if (progress < 100) {
      setProgress(progress + 1)
    }
  }, 100)
  return () => clearTimeout(timer)
}, [progress])

return <Progress value={progress} />`}</code>
                </pre>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Best Practices</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Always provide a value between 0 and 100</li>
                  <li>Include labels to provide context for the progress</li>
                  <li>Use appropriate colors to indicate status (red for errors, green for success)</li>
                  <li>Consider adding percentage or completion text</li>
                  <li>Use indeterminate states for unknown durations</li>
                  <li>Ensure progress updates are smooth with transitions</li>
                  <li>Provide feedback when progress is complete</li>
                  <li>Consider accessibility - ensure screen readers can announce progress</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Common Use Cases</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>File uploads and downloads</li>
                  <li>Form completion indicators</li>
                  <li>Multi-step processes</li>
                  <li>Loading states for async operations</li>
                  <li>Resource usage (storage, bandwidth, etc.)</li>
                  <li>Task completion tracking</li>
                  <li>Installation or setup wizards</li>
                  <li>Profile completion status</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(400%);
          }
        }
      `}</style>

      {/* Navigation */}
      <div className="mt-12 flex items-center justify-between">
        <Link href="/popover">
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Popover
          </Button>
        </Link>
        <Link href="/radio-group">
          <Button variant="outline">
            Radio Group
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </DocsLayoutWrapper>
  )
}
